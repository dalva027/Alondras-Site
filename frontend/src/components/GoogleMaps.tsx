import { APIProvider, Map, InfoWindow } from '@vis.gl/react-google-maps';
import { useState } from 'react';

interface GoogleMapsProps {
  address: string;
  className?: string;
}

const DEFAULT_CENTER = { lat: 29.349623763073446, lng: -98.12909164075306 };

const MAP_STYLES = [
  { elementType: 'geometry', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.stroke', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#4a3f2f' }] },
  { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#d4e8f0' }] },
  { featureType: 'poi', elementType: 'geometry.fill', stylers: [{ color: '#e8f0d4' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ visibility: 'simplified' }, { color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#d4c9b8' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#f0e8d8' }] },
];

function MapInner({ address }: { address: string }) {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <Map
      defaultCenter={DEFAULT_CENTER}
      defaultZoom={17}
      mapType="roadmap"
      styles={MAP_STYLES}
      disableDefaultUI={false}
      zoomControl={true}
    >
     
      {showInfo && (
        <InfoWindow
          anchor={DEFAULT_CENTER}
          pixelOffset={[0, -40]}
          onCloseClick={() => setShowInfo(false)}
        >
          <div style={{ fontFamily: 'sans-serif', fontSize: 13, padding: 4, whiteSpace: 'nowrap' }}>
            <strong style={{ color: '#e85d04' }}>Alondra&apos;s Mexican Restaurant</strong><br />
            <span style={{ color: '#666' }}>{address}</span>
          </div>
        </InfoWindow>
      )}
    </Map>
  );
}

function GoogleMaps({ address, className }: GoogleMapsProps) {
  const [error, setError] = useState(false);

  if (error) {
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
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}
      onLoad={() => {}}
      onError={() => setError(true)}
    >
      <div className={`map-container ${className ?? ''}`} style={{ width: '100%', height: 380 }}>
        <MapInner address={address} />
      </div>
    </APIProvider>
  );
}

export default GoogleMaps;
