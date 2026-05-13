import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="badge badge--terracotta">Get in Touch</span>
          <h1 className="display display--lg contact-hero__title">Contact Us</h1>
          <p className="contact-hero__subtitle">
            We\'d love to hear from you! Visit us, call, or send a message.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section">
        <div className="container">
          <div className="grid grid--3" style={{ marginBottom: 48 }}>
            <div className="feature-card feature-card--terracotta" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>&#128205;</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Location</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: 1.6 }}>
                123 Main Street<br />
                Your City, TX 00000
              </p>
            </div>
            <div className="feature-card feature-card--saffron" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>&#128340;</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Hours</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>
                Mon - Fri: 6AM - 9PM<br />
                Sat: 7AM - 9PM<br />
                Sun: 7AM - 3PM
              </p>
            </div>
            <div className="feature-card feature-card--mint" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>&#128222;</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Phone</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>
                (555) 123-4567<br />
                <em>Call for takeout orders</em>
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="img-placeholder img-placeholder--wide" style={{ marginBottom: 48 }}>
            <div>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>&#128506;</span>
              <div>Map Placeholder</div>
              <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Embed Google Maps here</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="text-center">
              <h2 className="heading" style={{ marginBottom: 8 }}>Send Us a Message</h2>
              <p className="subheading" style={{ marginBottom: 32 }}>
                Have a question or want to make a reservation? We\'d love to hear from you.
              </p>
            </div>

            <div className="contact-form">
              {submitted && (
                <div className="contact-form__success">
                  <span>&#10004;</span> Message sent successfully! We\'ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="contact-form__submit">
                  <button type="submit" className="btn btn--primary btn--lg">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band__bg" />
        <div className="container cta-band__content">
          <h2 className="cta-band__title">Can\'t Wait to See You!</h2>
          <p className="cta-band__subtitle">
            Come visit us and experience the warmth of authentic Mexican hospitality.
          </p>
          <div className="cta-band__actions">
            <a href="tel:5551234567" className="btn btn--primary btn--lg">
              <span>&#128222; Call Now</span>
            </a>
            <a href="#" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              <span>&#128205; Get Directions</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
