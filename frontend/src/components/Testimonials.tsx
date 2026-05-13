interface Testimonial {
  text: string;
  author: string;
  rating: number;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'The best huevos rancheros in town! My family comes here every Sunday and we always leave happy. The atmosphere is warm and the service is wonderful.',
    author: 'Maria G.',
    rating: 5,
    role: 'Regular Customer',
  },
  {
    text: 'Alondras fajita mix is absolutely incredible. You can taste the freshness in every bite. Best Mexican food I\'ve had outside of Mexico!',
    author: 'James R.',
    rating: 5,
    role: 'Food Enthusiast',
  },
  {
    text: 'Great breakfast spot! The chorizo con huevo is homemade and you can really tell the difference. Friendly staff and generous portions.',
    author: 'Linda S.',
    rating: 5,
    role: 'Local Resident',
  },
];

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="badge badge--terracotta">&#10084; Testimonials</span>
          <h2 className="heading" style={{ marginTop: 16, marginBottom: 8 }}>
            What Our Guests Say
          </h2>
          <hr className="divider" />
        </div>

        <div className="grid grid--3" style={{ marginTop: 48 }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card card--elevated" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ color: 'var(--brand-saffron)', fontSize: '1.1rem' }}>&#9733;</span>
                ))}
              </div>
              <p style={{ color: 'var(--body-strong)', fontSize: '0.95rem', lineHeight: 1.7, flex: 1 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-terracotta)' }}>
                  {t.author[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.9rem' }}>{t.author}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
