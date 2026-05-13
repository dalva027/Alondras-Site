import { Link } from 'react-router-dom';

function CTABand() {
  return (
    <section className="cta-band">
      <div className="cta-band__bg" />
      <div className="container cta-band__content">
        <h2 className="cta-band__title">
          Ready to Experience Authentic Mexican Flavors?
        </h2>
        <p className="cta-band__subtitle">
          Whether you're dining in or taking out, we've got something special for everyone.
        </p>
        <div className="cta-band__actions">
          <Link to="/menu" className="btn btn--primary btn--lg">
            <span>View Our Menu</span>
          </Link>
          <Link to="/contact" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
            <span>Get Directions</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTABand;
