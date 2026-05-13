interface Special {
  day: string;
  items: { name: string; price: string }[];
}

const weeklySpecials: Special[] = [
  { day: 'Monday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Huevos a la Mexicana', price: '$5.99' }] },
  { day: 'Tuesday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Chorizo con Huevo', price: '$5.99' }] },
  { day: 'Wednesday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Migas a la Mexicana', price: '$6.99' }] },
  { day: 'Thursday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Country Breakfast', price: '$6.99' }] },
  { day: 'Friday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Country Sausage & Eggs', price: '$5.99' }] },
];

function DailySpecials() {
  const today = new Date().getDay();
  const todaySpecial = today >= 1 && today <= 5 ? weeklySpecials[today - 1] : null;

  return (
    <section className="section section--soft">
      <div className="container">
        <div className="text-center">
          <span className="badge badge--success">&#127881; Daily Specials</span>
          <h2 className="heading" style={{ marginTop: 16, marginBottom: 8 }}>
            Today\'s Special
          </h2>
          <hr className="divider" />
          {todaySpecial && (
            <p className="subheading" style={{ marginBottom: 32 }}>
              Served from 6:00 AM - 11:00 AM with coffee or iced tea
            </p>
          )}
        </div>

        <div className="grid grid--3" style={{ marginTop: 32 }}>
          {weeklySpecials.map((special, i) => {
            const isToday = todaySpecial && todaySpecial.day === special.day;
            return (
              <div
                key={i}
                className={`card ${isToday ? 'card--elevated' : ''}`}
                style={{
                  padding: 24,
                  borderColor: isToday ? 'var(--brand-terracotta)' : 'var(--hairline)',
                  borderWidth: isToday ? '2px' : '1px',
                  borderStyle: 'solid',
                  position: 'relative',
                }}
              >
                {isToday && (
                  <span
                    className="badge badge--terracotta"
                    style={{ position: 'absolute', right: 16 }}
                  >
                    Today
                  </span>
                )}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: 16,
                  }}
                >
                  {special.day}
                </h3>
                {special.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: j < special.items.length - 1 ? '1px solid var(--hairline)' : 'none' }}>
                    <span style={{ color: 'var(--body-strong)', fontSize: '0.95rem' }}>{item.name}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--brand-terracotta)' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, color: 'var(--muted)', fontSize: '0.85rem' }}>
          * Breakfast after 11:00 AM will be $1.00 extra. Any substitution will be an extra charge.
        </p>
      </div>
    </section>
  );
}

export default DailySpecials;
