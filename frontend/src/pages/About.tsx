function About() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="badge badge--terracotta">Our Story</span>
          <h1 className="display display--lg about-hero__title">About Alondra's</h1>
          <p className="about-hero__subtitle">
            A family tradition of authentic Mexican flavors, served with love since day one.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story__text">
              <h2 className="heading">Our Story</h2>
              <p className="about-story__paragraph">
                Alondra's Mexican Restaurant was born from a family passion for authentic Mexican cuisine. What started as a love for cooking traditional recipes has grown into a beloved community                gathering place where families come together over delicious food.
              </p>
              <p className="about-story__paragraph">
                Every dish on our menu is prepared using time-honored recipes passed down through generations. From our homemade chorizo to our signature salsa ranchera, we use only the freshest ingredients and traditional techniques to bring you the true flavors of Mexico.
              </p>
              <p className="about-story__paragraph">
                Our commitment to quality and hospitality means that every guest feels like family. Whether you're joining us for a quick breakfast, a family lunch, or a casual dinner, we're here to serve you with warmth and authentic Mexican cuisine.
              </p>
            </div>
            <div className="about-story__image">
              <div className="img-placeholder img-placeholder--food">
                <div>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: 8 }}>&#127860;</span>
                  <div>Image Placeholder - Our Kitchen</div>
                  <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Add a photo of the kitchen or chef</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--soft">
        <div className="container">
          <div className="text-center">
            <span className="badge badge--saffron">What We Stand For</span>
            <h2 className="heading" style={{ marginTop: 16, marginBottom: 8 }}>
              Our Values
            </h2>
            <hr className="divider" />
          </div>

          <div className="grid grid--3" style={{ marginTop: 48 }}>
            <div className="feature-card feature-card--terracotta" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 16 }}>&#127869;</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Family First</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: 1.6 }}>
                Our family recipes and warm hospitality create a welcoming environment for every guest.
              </p>
            </div>
            <div className="feature-card feature-card--saffron" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 16 }}>&#127806;</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Fresh & Authentic</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>
                We source the freshest ingredients and prepare everything from scratch daily.
              </p>
            </div>
            <div className="feature-card feature-card--mint" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 16 }}>&#127857;</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }}>Community</h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.6 }}>
                Proud to be part of our community, serving neighbors with pride and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="badge badge--terracotta">Gallery</span>
            <h2 className="heading" style={{ marginTop: 16, marginBottom: 8 }}>
              A Glimpse Inside
            </h2>
            <hr className="divider" />
          </div>

          <div className="grid grid--3" style={{ marginTop: 48 }}>
            <div className="img-placeholder img-placeholder--food">
              <div>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>&#127860;</span>
                <div>Image Placeholder</div>
                <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Restaurant Interior</div>
              </div>
            </div>
            <div className="img-placeholder img-placeholder--food">
              <div>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>&#127860;</span>
                <div>Image Placeholder</div>
                <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Fresh Ingredients</div>
              </div>
            </div>
            <div className="img-placeholder img-placeholder--food">
              <div>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>&#127860;</span>
                <div>Image Placeholder</div>
                <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Dining Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band__bg" />
        <div className="container cta-band__content">
          <h2 className="cta-band__title">Come Experience the Tradition</h2>
          <p className="cta-band__subtitle">
            Join us for an authentic Mexican dining experience.
          </p>
          <div className="cta-band__actions">
            <a href="/contact" className="btn btn--primary btn--lg">
              <span>Visit Us</span>
            </a>
            <a href="/menu" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              <span>View Menu</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

