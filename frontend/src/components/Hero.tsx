import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="badge badge--saffron hero__badge">
          <span>&#9733;</span> Authentic Mexican Cuisine
        </span>
        <h1 className="display display--lg hero__title">
          Welcome to<br />
          <span className="hero__title-accent">Alondra's</span>
        </h1>
        <p className="hero__subtitle">
          Family recipes passed down through generations, served with love and the freshest ingredients.\n          Every dish tells a story of tradition and flavor.
        </p>
        <div className="hero__actions">
          <Link to="/menu" className="btn btn--primary btn--lg">
            <span>Explore Our Menu</span>
            <span>&rarr;</span>
          </Link>
          <Link to="/contact" className="btn btn--outline btn--lg">
            <span>Visit Us</span>
          </Link>
        </div>
        <div className="hero__highlights">
          <div className="hero__highlight">
            <span className="hero__highlight-number">6AM</span>
            <span className="hero__highlight-label">Daily Breakfast</span>
          </div>
          <div className="hero__highlight-divider" />
          <div className="hero__highlight">
            <span className="hero__highlight-number">Fresh</span>
            <span className="hero__highlight-label">Ingredients Daily</span>
          </div>
          <div className="hero__highlight-divider" />
          <div className="hero__highlight">
            <span className="hero__highlight-number">Family</span>
            <span className="hero__highlight-label">Owned & Operated</span>
          </div>
        </div>
      </div>
      <div className="hero__wave">
        <svg  viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 42C1248 44 1344 58 1392 65L1440 72V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
