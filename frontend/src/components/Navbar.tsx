import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/logo.png" alt="Alondra's Mexican Restaurant" className="navbar__logo-img" />
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar__toggle-line ${mobileOpen ? 'navbar__toggle-line--open' : ''}`} />
          <span className={`navbar__toggle-line ${mobileOpen ? 'navbar__toggle-line--open' : ''}`} />
          <span className={`navbar__toggle-line ${mobileOpen ? 'navbar__toggle-line--open' : ''}`} />
        </button>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn--primary navbar__cta btn--outline-hero" onClick={() => setMobileOpen(false)}>
              Order Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
