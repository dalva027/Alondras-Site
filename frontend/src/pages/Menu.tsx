import { useState } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  name: string;
  note?: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: 'Breakfast',
    note: 'Served 6:00 AM - 11:00 AM',
    items: [
      { name: 'Huevos Rancheros', description: '2 eggs, salsa ranchera, beans, potatoes & 2 slices of bacon', price: '$6.99' },
      { name: 'Chorizo con Huevo', description: "Alondra's homemade chorizo w/ onion, tomato & jalapeno, served w/ beans, potatoes", price: '$6.99' },
      { name: 'Huevo a la Mexicana', description: 'Served w/ beans & potatoes', price: '$6.99' },
      { name: 'Jamon con Huevo', description: 'Served w/ beans & potatoes', price: '$6.99' },
      { name: 'Chicharron con Huevo', description: 'Pork rinds mixed w/ egg. Served w/ beans & potatoes', price: '$6.99' },
      { name: 'Papa con Huevo', description: 'Potato mixed w/ egg. Served w/ beans & 2 slices of bacon', price: '$6.99' },
      { name: 'Country Sausage con Huevo', description: 'Served w/ beans & potatoes', price: '$6.99' },
      { name: 'Papas Rancheras', description: 'Cooked w/ salsa ranchera. Served w/ beans & potatoes', price: '$6.99' },
      { name: 'Pork Chop Plate', description: '1 chop & 2 eggs w/ salsa ranchera w/ beans & potatoes', price: '$8.75' },
      { name: 'Migas a la Mexicana', description: 'Tortilla chips mixed w/ egg, onion, tomato & jalapeno, topped w/ cheese. Served w/ beans, potatoes & bacon', price: '$7.99' },
      { name: 'Machacado con Huevo', description: 'Mixed w/ 2 eggs. Served w/ beans & potatoes', price: '$7.99' },
      { name: 'Country Breakfast', description: '2 pancakes, 2 eggs & 2 slices of bacon', price: '$7.25' },
      { name: 'Texas Breakfast', description: '2 eggs, 2 sausage patties, toast & jelly', price: '$6.99' },
      { name: 'Pancake Plate', description: '3 buttermilk pancakes', price: '$6.99' },
      { name: 'Chilaquiles Plate', description: 'Tortilla chips w/ sauce & white cheese. Served w/ potato & bacon', price: '$6.99' },
      { name: 'Nopal con Huevo', description: 'Mixed w/ egg. Served w/ beans, potato & 2 slices of bacon', price: '$6.99' },
      { name: "Ernie's Breakfast Plate", description: 'French toast, 2 eggs & your choice of 2 bacon strip or 2 sausage patties', price: '$6.99' },
      { name: 'Waffle Plate', description: '2 waffles, 2 bacon & 2 eggs', price: '$7.25' },
      { name: 'Biscuit & Gravy Plate', description: '2 bisquits, 2 eggs & 2 bacon', price: '$7.25' },
    ],
  },
  {
    name: 'Omelets',
    items: [
      { name: 'Cheese', description: 'Filled w/ cheddar cheese & topped w/ melted American cheese', price: '$7.75' },
      { name: 'Veggie', description: '3 eggs w/ fresh onion, bell pepper & tomato. Topped w/ American cheese', price: '$6.99' },
      { name: "Farmer's", description: 'Country sausage or bacon, onion, green pepper, tomato & American cheese melted on top', price: '$7.75' },
      { name: "Ron's", description: '3 eggs, filled w/ steak, onion, bell pepper & onion. Topped w/ American cheese', price: '$7.75' },
    ],
  },
  {
    name: 'Tacos',
    note: '3 for $4.50 ($2.25 each) | Extra Ingrediente: $0.65',
    items: [
      { name: 'Bean & Cheese', description: 'Bean & cheese filling', price: '$2.25' },
      { name: 'Potato & Egg', description: 'Potato & egg filling', price: '$2.25' },
      { name: 'Nopales & Egg', description: 'Nopales & egg filling', price: '$2.25' },
      { name: 'Papas Rancheras', description: 'Papas rancheras filling', price: '$2.25' },
      { name: 'Bean & Egg', description: 'Bean & egg filling', price: '$2.25' },
      { name: 'Country Ranchero', description: 'Country ranchero filling', price: '$2.50' },
      { name: 'Machacado & Egg', description: 'Machacado & egg filling', price: '$2.50' },
      { name: 'Chicharron & Egg', description: 'Chicharron & egg filling', price: '$2.35' },
      { name: 'Country & Egg', description: 'Country sausage & egg filling', price: '$2.35' },
      { name: 'Potato & Chorizo', description: 'Potato & chorizo filling', price: '$2.35' },
      { name: 'Bacon & Egg', description: 'Bacon & egg filling', price: '$2.35' },
      { name: 'Migas', description: 'Migas filling', price: '$2.50' },
      { name: 'Ham & Egg', description: 'Ham & egg filling', price: '$2.50' },
    ],
  },
  {
    name: 'Burritos',
    note: 'Base Price: $6.25 | Extra Ingrediente: $0.95',
    items: [
      { name: 'Bean, Cheese & Bacon', description: 'Bean, cheese & bacon filling', price: '$6.25' },
      { name: 'Ham, Egg & Beans', description: 'Ham, egg & beans filling', price: '$6.25' },
      { name: 'Chorizo, Eggs & Beans', description: 'Chorizo, eggs & beans filling', price: '$6.25' },
      { name: 'Country, Eggs & Beans', description: 'Country sausage, eggs & beans filling', price: '$6.25' },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Pancake', description: '', price: '$2.50' },
      { name: 'Pork Chop', description: '', price: '$3.25' },
      { name: 'Egg', description: '', price: '$2.00' },
      { name: 'Country Sausage', description: '', price: '$3.25' },
      { name: 'Shredded Cheese', description: '', price: '$2.00' },
      { name: 'Potatoes', description: '', price: '$2.50' },
      { name: 'Bacon', description: '2 strips', price: '$2.75' },
      { name: 'Sausage Patties', description: '1x $2.00 / 2x $4.00', price: '$2.00 - $4.00' },
    ],
  },
  {
    name: 'Lunch & Dinner',
    note: 'Served 11:00 AM - 3:00 PM',
    items: [
      { name: 'Carne Asada Plate', description: 'Served w/ salad, guacamole, rice & beans', price: '$11.75' },
      { name: 'Beef Fajita Plate', description: 'Topped w/ bell peppers, onions & tomato. Served w/ rice, beans & salad', price: '$11.75' },
      { name: 'Spicy Beef Fajita Plate', description: 'Topped w/ bell peppers, onions & tomato. Served w/ rice, beans & salad', price: '$11.75' },
      { name: 'Spicy Jack Fajita Plate', description: 'Beef fajita topped w/ Monterrey Jack cheese & grilled jalapenos. Served w/ rice, beans & salad', price: '$11.75' },
      { name: 'Chicken Fajita Plate', description: 'Grilled w/ sauteed onion, tomato & bell pepper. Served w/ rice, beans & salad', price: '$11.75' },
      { name: 'Fajita Mix', description: 'Grilled w/ sauteed onion, tomato & bell pepper. Served w/ rice, beans & salad', price: '$11.75' },
      { name: "Alondra's Fajita Mix", description: 'Beef, chicken & shrimp fajita grilled w/ sauteed onion, tomato & bell pepper. Served w/ rice, beans & salad', price: '$12.75' },
      { name: 'Grilled Chicken Breast', description: 'W/ sauteed onion, tomato & bell pepper. Served w/ rice & beans', price: '$11.25' },
      { name: 'La Vernia Salad', description: 'W/ grilled chicken & fresh tomatoes, bell pepper, onion & cheese', price: '$11.25' },
      { name: 'Puffy Tacos Plate', description: 'Picadillo & served w/ rice & beans', price: '$11.75' },
      { name: 'Guisada Plate', description: 'Served w/ rice & beans', price: '$11.75' },
      { name: 'Barbacoa Plate', description: 'Served w/ pico de gallo, guacamole, rice, beans & salad', price: '$11.75' },
      { name: 'Tampiquena Steak', description: 'Served w/ 1 enchilada, guacamole, rice, beans & salad', price: '$11.99' },
      { name: 'Flautas', description: '3 served w/ guacamole, rice, beans & salad', price: '$8.99' },
      { name: 'Tacos Suaves', description: '3 served w/ guacamole, rice, beans & salad', price: '$8.99' },
      { name: "Alondra's Quesadilla", description: '2 filled w/ Monterrey Jack cheese & your choice of beef or chicken fajita', price: '$11.75' },
      { name: 'Cheese Quesadilla Plate', description: '2 filled w/ Monterrey Jack cheese served w/ rice & beans', price: '$11.75' },
      { name: 'Fajita Shrimp Parrillada', description: 'Served w/ rice, refried beans, pico de gallo & guacamole', price: '$12.99' },
      { name: 'Steak Ranchero', description: "Ribeeye steak topped w/ Alondra's homemade ranchero sauce. Served w/ rice, beans & salad", price: '$11.99' },
      { name: 'Steak Charro', description: 'Ribeeye steak topped w/ sauteed onions & nopalitos. Served w/ rice, beans & salad', price: '$11.99' },
      { name: 'Pork Chops a la Mexicana', description: 'Topped w/ sauteed onions, tomato & jalapenos. Served w/ rice, beans & salad', price: '$11.75' },
      { name: 'Pork Chop Ranchero', description: "Topped w/ Alondra's homemade ranchero sauce. Served w/ rice, beans & salad", price: '$11.75' },
    ],
  },
  {
    name: 'Enchiladas',
    note: 'Any substitution will be an extra charge.',
    items: [
      { name: 'Enchilada Plate', description: '3 Beef or Chicken topped w/ melted American cheese. Served w/ rice & beans', price: '$9.99' },
      { name: 'Cheese Enchilada Plate', description: '3 filled w/ cheddar cheese & topped w/ American cheese. Served w/ rice & beans', price: '$9.99' },
      { name: 'Green Enchilada Plate', description: '3 Beef or Chicken green enchiladas topped w/ Monterrey Jack cheese. Served w/ rice & beans', price: '$9.99' },
      { name: 'Enchiladas Rancheras', description: '3 w/ your choice of meat topped w/ Monterrey Jack cheese. Served w/ rice & beans', price: '$9.99' },
      { name: 'Mexican Plate', description: '2 Cheese enchiladas & 1 crispy taco filled w/ ground beef or shredded chicken. Served w/ rice, beans & salad', price: '$9.99' },
      { name: 'Tejano Plate', description: '2 Cheese enchiladas w/ your choice of meat & a portion of carne guisada. Served w/ rice & beans', price: '$10.99' },
      { name: 'Combination Plate', description: '1 Cheese enchilada, 1 Bean & cheese chalupa & 1 crispy taco', price: '$9.99' },
      { name: 'Gordita Plate', description: '1 stuffed w/ your choice of meat, tomato, lettuce & avocado slices. Served w/ rice & beans', price: '$9.50' },
      { name: 'Crispy Taco Plate', description: '1 stuffed w/ your choice of meat, tomato, lettuce & avocado slices. Served w/ rice & beans', price: '$8.99' },
      { name: 'Burrito Jalisco', description: 'Filled w/ refried beans & your choice of meat. Topped w/ gravy & American cheese. Served w/ rice & beans', price: '$8.99' },
      { name: 'Chimichanga', description: 'Burrito filled w/ beans & your choice of meat. Deep fried & topped w/ gravy & American cheese. Served w/ rice & beans', price: '$9.99' },
      { name: 'Chalupas Supreme', description: '2 topped w/ sour cream, guacamole, lettuce, tomato, cheese & your choice of ground beef or shredded chicken. Served w/ rice & beans', price: '$8.99' },
      { name: 'Chalupas Plate', description: '2 Bean & cheese chalupa topped w/ lettuce & tomato. Served w/ rice, beans, guacamole & sour cream', price: '$8.99' },
    ],
  },
  {
    name: 'Seafood',
    note: 'All seafood items are $12.99 and served with Rice, French Fries, Salad & Avocado',
    items: [
      { name: 'Camarones a la Mexicana', description: '', price: '$12.99' },
      { name: 'Camarones a la Diabla', description: '', price: '$12.99' },
      { name: 'Pescado Empanizado', description: 'Breaded served w/ rice, french fries, salad & avocado', price: '$12.99' },
      { name: 'Camaron Empanizado', description: 'Breaded served w/ rice, french fries, salad & avocado', price: '$12.99' },
    ],
  },
  {
    name: 'Appetizers',
    items: [
      { name: 'Cheese Dip (8 oz.)', description: '', price: '$6.99' },
      { name: 'Guacamole (8 oz.)', description: '', price: '$6.99' },
      { name: 'Bean Cheese Nachos', description: '', price: 'SM: $5.99 / LG: $7.75' },
      { name: 'Ground Beef Nachos', description: '', price: 'SM: $7.25 / LG: $8.99' },
      { name: 'Chicken Fajita Nachos', description: '', price: 'SM: $7.25 / LG: $8.99' },
      { name: 'Super Nachos', description: 'Choice of meat (Beef, Chicken Fajita or Ground Beef) topped w/ lettuce, tomatoes, guacamole, sour cream & jalapenos', price: 'SM: $8.25 / LG: $9.99' },
    ],
  },
  {
    name: 'Tostadas',
    items: [
      { name: 'Tostada', description: 'Flat crispy tortilla topped w/ beans, lettuce, avocado, tomato, sour cream, cheese & your choice of meat', price: '$3.65' },
    ],
  },
  {
    name: 'Gorditas',
    items: [
      { name: 'Gordita', description: 'Thick corn tortilla stuffed w/ your choice of meat, beans, tomato, lettuce & avocado', price: '$5.25' },
    ],
  },
  {
    name: 'Hamburgers',
    items: [
      { name: 'Hamburger', description: 'W/ cheese, lettuce, tomato & pickles', price: '$6.99' },
      { name: 'Hamburger w/ Fries', description: '', price: '$7.99' },
      { name: 'Mexican Burger', description: '', price: '$8.99' },
    ],
  },
  {
    name: 'Tortas',
    items: [
      { name: 'Torta', description: 'Filled w/ lettuce, tomato, avocado, sour cream & your choice of meat (Milanesa, Chicken, Pastor, Avocado, Barbacoa, Chorizo & Egg, Ham, Carne Asada, or Beef Fajita)', price: '$6.99' },
    ],
  },
  {
    name: 'Chicken Wings',
    items: [
      { name: 'Chicken Wings w/ Fries', description: '', price: '$7.99' },
    ],
  },
  {
    name: "Kiddo's",
    items: [
      { name: "Kiddo's Meal", description: 'Chicken Nuggets w/ Fries, Grilled Cheese w/ Fries, Enchiladas w/ Rice & Beans, Crispy Taco w/ Rice & Beans, or Guisada Taco w/ Rice & Beans', price: '$6.25' },
    ],
  },
  {
    name: 'Chile Relleno',
    items: [
      { name: 'Chile Relleno Queso', description: '', price: '$11.99' },
      { name: 'Picadillo', description: '', price: '$12.99' },
    ],
  },
  {
    name: 'Soups',
    items: [
      { name: 'Tortilla Soup', description: '', price: 'SM: $6.99 / LG: $7.99' },
      { name: 'Beef Soup', description: 'Large', price: '$9.25' },
      { name: 'Menudo', description: '', price: 'SM: $7.99 / LG: $9.25' },
    ],
  },
  {
    name: 'Side Orders',
    items: [
      { name: 'Rice or Beans', description: '', price: '$1.75' },
      { name: 'Rice or Beans', description: '', price: '$2.75' },
      { name: 'Chiles Togados (2)', description: '', price: '$1.75' },
      { name: '1 Enchilada', description: '', price: '$2.75' },
      { name: 'Shredded Cheese', description: '', price: '$1.75' },
      { name: 'Crispy Taco', description: '', price: '$2.75' },
      { name: 'French Fries', description: '', price: '$2.75' },
      { name: 'Sour Cream', description: '', price: '$1.75' },
      { name: 'Nopales', description: '', price: '$2.75' },
      { name: 'Charros Beans', description: '', price: '$2.75' },
      { name: 'Bag of Chips', description: '', price: '$2.35' },
      { name: 'Chips & Hot Sauce', description: '', price: '$3.75' },
      { name: 'Cheese & Dip Cheese', description: '', price: '$6.25' },
      { name: 'Chips & Guacamole', description: '', price: '$6.25' },
      { name: '12 Flour Tortillas', description: '', price: '$4.75' },
      { name: '12 Corn Tortillas', description: '', price: '$4.75' },
    ],
  },
  {
    name: 'Side Orders (To Go Only)',
    items: [
      { name: 'Rice & Beans', description: '8oz $2.75 / 16oz $4.25 / 32oz $6.75', price: '$2.75 - $6.75' },
      { name: 'Hot Sauce', description: '8oz $2.99 / 16oz $5.75 / 32oz $7.25', price: '$2.99 - $7.25' },
      { name: 'Pico de Gallo', description: '8oz $2.99 / 16oz $5.99 / 32oz $7.25', price: '$2.99 - $7.25' },
    ],
  },
  {
    name: 'By The Pound',
    items: [
      { name: 'Barbacoa 1 LB', description: 'W/ cilantro, onion, salsa & tortillas', price: '$14.99' },
      { name: 'Fajitas', description: 'Served w/ 16oz of rice & refried beans, 8oz of pico de gallo & guacamole, 8 flour tortillas or 12 corn tortillas', price: '$23.99' },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { name: 'Lemonade', description: '', price: '$3.25' },
      { name: 'Ice Tea', description: '', price: '$2.50' },
      { name: 'Orange Juice', description: 'No refill, 16 oz', price: '$2.99' },
      { name: 'Apple Juice', description: 'No refill, 16 oz', price: '$2.75' },
      { name: 'Hot Chocolate', description: 'No refill', price: '$2.75' },
      { name: 'Coffee', description: '', price: '$1.99' },
      { name: 'Coffee To Go', description: '', price: '$2.50' },
      { name: 'Chocolate Milk', description: 'No refill', price: '$2.50' },
      { name: 'Milk', description: 'No refill, 16 oz', price: '$2.50' },
      { name: 'Mexican Coke', description: '', price: '$2.99' },
      { name: 'Horchata', description: '', price: '$3.25' },
      { name: 'Can Sodas', description: 'Diet Coke, Coca-Cola, Sprite, Dr Pepper', price: '$2.25' },
      { name: 'To Go Containers', description: '', price: '$0.40' },
    ],
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].name);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = menuData.map((cat) => cat.name);
  const filteredItems = menuData
    .find((cat) => cat.name === activeCategory)
    ?.items.filter((item) =>
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero__content">
          <span className="badge badge--saffron">Our Menu</span>
          <h1 className="display display--lg menu-hero__title">Explore Our Menu</h1>
          <p className="menu-hero__subtitle">
            From authentic breakfast favorites to hearty lunch and dinner plates, every dish is prepared with love and authentic Mexican recipes.
          </p>
          <div className="menu-hero__search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input
              type="text"
              placeholder="Search the menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-hero__search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="menu-hero__search-clear">
                &times;
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="menu-tabs-section">
        <div className="container">
          <div className="menu-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-tab ${activeCategory === cat ? 'menu-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section">
        <div className="container">
          <div className="menu-category">
            <div className="menu-category__header">
              <h2 className="heading">{activeCategory}</h2>
              {menuData.find((c) => c.name === activeCategory)?.note && (
                <p className="menu-category__note">
                  {menuData.find((c) => c.name === activeCategory)?.note}
                </p>
              )}
            </div>

            {/* Image placeholder */}
            <div className="img-placeholder img-placeholder--wide" style={{ marginBottom: 40 }}>
              <div>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>&#127860;</span>
                <div>Image Placeholder - {activeCategory}</div>
                <div style={{ fontSize: '0.8rem', marginTop: 4 }}>Add your food photography here</div>
              </div>
            </div>

            <div className="menu-items">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, i) => (
                  <div key={i} className="menu-item">
                    <div className="menu-item__info">
                      <h3 className="menu-item__name">{item.name}</h3>
                      {item.description && <p className="menu-item__desc">{item.description}</p>}
                    </div>
                    <span className="menu-item__price">{item.price}</span>
                  </div>
                ))
              ) : (
                <div className="menu-empty">
                  <p>No items found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dietary note */}
      <section className="section section--soft">
        <div className="container text-center">
          <h3 className="heading" style={{ marginBottom: 16 }}>Dietary Information</h3>
          <p className="subheading" style={{ marginBottom: 32 }}>
            Please inform your server of any allergies or dietary restrictions. We are happy to accommodate your needs.
          </p>
          <div className="grid grid--4">
            <div className="feature-card feature-card--terracotta" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 8 }}>&#127859;</span>
              <strong>Gluten Options</strong>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: 4 }}>Corn tortillas available</p>
            </div>
            <div className="feature-card feature-card--saffron" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 8 }}>&#127807;</span>
              <strong>Spice Levels</strong>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: 4 }}>Customizable heat</p>
            </div>
            <div className="feature-card feature-card--mint" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 8 }}>&#127806;</span>
              <strong>Fresh Ingredients</strong>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: 4 }}>Daily prepared</p>
            </div>
            <div className="feature-card feature-card--lavender" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 8 }}>&#127869;</span>
              <strong>Family Friendly</strong>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginTop: 4 }}>Kiddo's menu available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
