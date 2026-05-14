import { useEffect, useRef, useState, useCallback } from 'react';

interface GoogleMapsProps {
  address: string;
  className?: string;
}

declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (el: HTMLElement, opts: {
          center: { lat: number; lng: number };
          zoom: number;
          mapTypeId?: string;
          styles?: any[];
          disableDefaultUI?: boolean;
          zoomControl?: boolean;
        }) => void;
        Marker: new (opts: { position: { lat: number; lng: number }; map: any; title: string }) => void;
        InfoWindow: new (opts: { content: string }) => { open(map: any, anchor?: any): void };
        Geocoder: new () => { geocode(req: { address: string }, cb: (r: any[], s: string) => void): void };
        GeocoderStatus: { OK: string };
      };
    };
  }
}

const DEFAULT_CENTER = { lat: 29.349623763073446, lng: -98.12909164075306 };
const API_URL = (key: string) => `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;

function GoogleMaps({ address, className }: GoogleMapsProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const mountedRef = useRef(true);
  const scriptLoadedRef = useRef(false);
  const mapReadyRef = useRef(false);

  const renderMap = useCallback(() => {
    if (!mapRef.current || !window.google?.maps) return;
    if (mapReadyRef.current) return; // already rendered

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, geocoderStatus) => {
      if (!mountedRef.current) return;
      if (!window.google?.maps) return;

      let center: { lat: number; lng: number };

      if (geocoderStatus === window.google.maps.GeocoderStatus.OK && results?.[0]) {
        const loc = results[0].geometry.location;
        center = { lat: loc.lat(), lng: loc.lng() };
      } else {
        console.warn('[GoogleMaps] Geocode failed for:', address, 'status:', geocoderStatus);
        center = DEFAULT_CENTER;
      }

      const map = new window.google.maps.Map(mapRef.current!, {
        center,
        zoom: 15,
        mapTypeId: 'roadmap' as const,
        styles: [
          { elementType: 'geometry', stylers: [{ visibility: 'off' }] },
          { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#4a3f2f' }] },
          { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#d4e8f0' }] },
          { featureType: 'poi', elementType: 'geometry.fill', stylers: [{ color: '#e8f0d4' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ visibility: 'simplified' }, { color: '#ffffff' }] },
          { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#d4c9b8' }] },
          { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f0e8d8' }] },
        ],
        disableDefaultUI: false,
        zoomControl: true,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "Alondra's Mexican Restaurant",
      });
      new window.google.maps.InfoWindow({
        content: `<strong>Alondra's Mexican Restaurant</strong><br/>${address}`,
      }).open(map);

      mapReadyRef.current = true;
      if (mountedRef.current) setStatus('ready');
    });
  }, [address]);

  useEffect(() => {
    mountedRef.current = true;

    // If map already rendered, skip
    if (mapReadyRef.current) return;

    // Already loaded
    if (window.google?.maps) {
      renderMap();
      return;
    }

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      console.error('[GoogleMaps] VITE_GOOGLE_MAPS_API_KEY is not set');
      setStatus('error');
      return;
    }

    // Script already in DOM
    if (scriptLoadedRef.current) {
      const poll = setInterval(() => {
        if (!mountedRef.current) { clearInterval(poll); return; }
        if (window.google?.maps) {
          clearInterval(poll);
          renderMap();
        }
      }, 300);
      return () => clearInterval(poll);
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = API_URL(apiKey);
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('[GoogleMaps] Script loaded successfully');
      scriptLoadedRef.current = true;
      if (mountedRef.current) renderMap();
    };

    script.onerror = () => {
      console.error('[GoogleMaps] Failed to load Google Maps script');
      if (mountedRef.current) setStatus('error');
    };

    document.head.appendChild(script);

    // Timeout: if map doesn't load within 15s, show error
    const timeout = setTimeout(() => {
      if (mountedRef.current && !mapReadyRef.current) {
        console.warn('[GoogleMaps] Timeout after 15s — map did not render');
        setStatus('error');
      }
    }, 15000);

    return () => {
      mountedRef.current = false;
      clearTimeout(timeout);
    };
  }, [renderMap]);

  if (status === 'error') {
    return (
      <div className="img-placeholder img-placeholder--wide" style={{ minHeight: 320 }}>
        <div style={{ textAlign: 'center', padding: '40px 16px' }}>
          <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>&#128506;</span>
          <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>Map unavailable</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 12 }}>
            Google Maps failed to load. Check your browser console for details.
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            style={{ fontSize: '0.85rem', padding: '8px 20px' }}
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`img-placeholder img-placeholder--wide map-container ${className ?? ''}`}>
      <div ref={mapRef} className="map-container__map" style={{ minHeight: 380 }} />
      {status === 'loading' && (
        <div className="map-container__loading">
          <div className="map-container__spinner" />
          <span>Loading map...</span>
        </div>
      )}
    </div>
  );
}

export default GoogleMaps;
