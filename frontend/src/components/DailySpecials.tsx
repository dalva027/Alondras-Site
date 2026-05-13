import { useState, useEffect } from 'react';

interface SpecialItem {
  name: string;
  price: string;
  description?: string;
}

interface DaySpecials {
  day: string;
  items: SpecialItem[];
}

const breakfastSpecials: DaySpecials[] = [
  { day: 'Monday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Huevos a la Mexicana', price: '$5.99' }] },
  { day: 'Tuesday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Chorizo con Huevo', price: '$5.99' }] },
  { day: 'Wednesday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Migas a la Mexicana', price: '$6.99' }] },
  { day: 'Thursday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Country Breakfast', price: '$6.99' }] },
  { day: 'Friday', items: [{ name: 'Huevos Rancheros', price: '$5.99' }, { name: 'Country Sausage & Eggs', price: '$5.99' }] },
];

const lunchSpecials: DaySpecials[] = [
  { day: 'Monday', items: [
    { name: 'Grilled Chicken Breast', price: '$9.50', description: 'Daily Special' },
    { name: 'Cheese Enchilada Plate', price: '$7.99', description: 'Daily Special' },
    { name: 'Chalupa Plate', price: '$7.99', description: 'Daily Special' },
  ]},
  { day: 'Tuesday', items: [
    { name: 'Spicy Jack Fajitas', price: '$9.50', description: 'Daily Special' },
    { name: 'Carne Guisada Plate', price: '$9.50', description: 'Daily Special' },
    { name: 'Mexican Plate', price: '$7.99', description: 'Daily Special' },
  ]},
  { day: 'Wednesday', items: [
    { name: 'Chicken Fajita Plate', price: '$9.99', description: 'Daily Special' },
    { name: 'Pork Chop Ranchero', price: '$8.50', description: 'Daily Special' },
    { name: 'Chalupa Supreme', price: '$8.50', description: 'Daily Special' },
  ]},
  { day: 'Thursday', items: [
    { name: 'Taco Salad', price: '$7.99' },
    { name: "Alondra's Quesadilla", price: '$7.99', description: '2 filled w/ Monterrey Jack cheese & your choice of beef or chicken fajita' },
    { name: 'Burrito Jalisco', price: '$7.99', description: 'Filled w/ refried beans & your choice of meat. Topped w/ gravy & American cheese. Served w/ rice & beans' },
  ]},
  { day: 'Friday', items: [
    { name: "Alondra's Fajita Mix", price: '$9.25', description: 'Beef, chicken & shrimp fajita grilled w/ sauteed onion, tomato & bell pepper. Served w/ rice, beans & salad' },
    { name: 'Steak Charro Plate', price: '$9.25', description: 'Ribeye steak topped w/ sauteed onions & nopalitos. Served w/ rice, beans & salad' },
    { name: 'Crispy Taco Plate', price: '$7.75', description: '1 stuffed w/ your choice of meat tomato, lettuce & avocado slices. Served w/ rice & beans' },
    { name: 'Chimichanga Plate', price: '$8.25', description: 'Burrito filled w/ beans & your choice of meat. Deep fried & topped w/ gravy & American cheese. Served w/ rice & beans' },
  ]},
];

function DailySpecials() {
  const [mode, setMode] = useState<'breakfast' | 'lunch'>('breakfast');
  const [isLunchTime, setIsLunchTime] = useState(false);

  useEffect(() => {
    const updateMode = () => {
      const hour = new Date().getHours();
      setIsLunchTime(hour >= 11);
      setMode(hour >= 11 ? 'lunch' : 'breakfast');
    };
    updateMode();
    const interval = setInterval(updateMode, 60000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date().getDay();
  const todaySpecials = mode === 'breakfast' ? breakfastSpecials : lunchSpecials;
  const todaySpecial = today >= 1 && today <= 5 ? todaySpecials[today - 1] : null;

  const toggleLabel = mode === 'breakfast'
    ? 'Lunch Especials'
    : 'Breakfast Especials';

  return (
    <section className="section section--soft">
      <div className="container">
        <div className="text-center">
          <span className="badge badge--success">&#127881; Daily Specials</span>
          <h2 className="heading" style={{ marginTop: 16, marginBottom: 8 }}>
            Today's Special
          </h2>
          <hr className="divider" />
          <p className="subheading" style={{ marginBottom: 32 }}>
            {mode === 'breakfast'
              ? 'Served from 6:00 AM - 11:00 AM with coffee or iced tea'
              : 'Served from 11:00 AM - 3:00 PM with coffee or iced tea'}
          </p>

          <button
            onClick={() => setMode(mode === 'breakfast' ? 'lunch' : 'breakfast')}
            className="btn btn--outline"
            style={{ marginBottom: 16, fontSize: '0.9rem', padding: '10px 24px' }}
          >
            {mode === 'breakfast' ? '🍽️' : '☕'} {toggleLabel}

          </button>
        </div>

        <div className="grid grid--3" style={{ marginTop: 32 }}>
          {todaySpecials.map((special, i) => {
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
                    style={{ position: 'absolute', right: 16, top: 16 }}
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
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '8px 0',
                      borderBottom: j < special.items.length - 1 ? '1px solid var(--hairline)' : 'none',
                    }}
                  >
                    <div style={{ flex: 1, marginRight: 8 }}>
                      <span style={{ color: 'var(--body-strong)', fontSize: '0.95rem', fontWeight: 500 }}>{item.name}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--brand-terracotta)', whiteSpace: 'nowrap' }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: 'center', marginTop: 24, color: 'var(--muted)', fontSize: '0.85rem' }}>
          {mode === 'breakfast'
            ? '* Breakfast after 11:00 AM will be $1.00 extra. Any substitution will be an extra charge.'
            : '* Any substitution will be an extra charge. All specials served w/ coffee or iced tea.'}
        </p>
      </div>
    </section>
  );
}

export default DailySpecials;
