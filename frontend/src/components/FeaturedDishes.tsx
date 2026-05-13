import { Link } from 'react-router-dom';

interface Dish {
  name: string;
  description: string;
  price: string;
  category: string;
  colorClass: string;
  icon: string;
}

const dishes: Dish[] = [
  {
    name: 'Huevos Rancheros',
    description: '2 eggs, salsa ranchera, beans, potatoes & bacon',
    price: '$6.99',
    category: 'Breakfast',
    colorClass: 'feature-card--terracotta',
    icon: '🍳',
  },
  {
    name: "Alondra's Fajita Mix",
    description: 'Beef, chicken & shrimp grilled with onion, tomato & bell pepper',
    price: '$12.75',
    category: 'Lunch',
    colorClass: 'feature-card--saffron',
    icon: '🥘',
  },
  {
    name: 'Camarones a la Diabla',
    description: 'Shrimp with tomato, onion, jalapeño. Served with rice, fries, salad & avocado',
    price: '$12.99',
    category: 'Seafood',
    colorClass: 'feature-card--mint',
    icon: '🦐',
  },
  {
    name: 'Chilaquiles Plate',
    description: 'Tortilla chips with sauce & white cheese. Served with potato & bacon',
    price: '$6.99',
    category: 'Breakfast',
    colorClass: 'feature-card--peach',
    icon: '🌶️',
  },
];

function FeaturedDishes() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <span className="badge badge--terracotta">Popular Dishes</span>
          <h2 className="heading" style={{ marginTop: 16, marginBottom: 8 }}>
            Customer Favorites
          </h2>
          <hr className="divider" />
          <p className="subheading">
            A taste of our most loved dishes, made with authentic recipes and the freshest ingredients.
          </p>
        </div>
        <div className="grid grid--4" style={{ marginTop: 48 }}>
          {dishes.map((dish, i) => (
            <div key={i} className={`feature-card ${dish.colorClass} animate-fade-in-up`}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>
                {String(dish.icon)}
              </span>
              <span className="badge" style={{ marginBottom: 12, background: "rgba(255,255,255,0.2)", color: "inherit" }}>
                {dish.category}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, marginBottom: 8 }}>
                {dish.name}
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85, marginBottom: 16, lineHeight: 1.5 }}>
                {dish.description}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700 }}>
                  {dish.price}
                </span>
                <Link to="/menu" style={{ fontSize: "0.85rem", fontWeight: 500, opacity: 0.8, textDecoration: "underline" }}>
                  View Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 48 }}>
          <Link to="/menu" className="btn btn--dark">
            <span>View Full Menu</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;
