import React, { useState } from 'react';
import FoodItem from '../components/FoodItem';
import './FoodPage.css';

export const FoodPage = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Pasta', price: 10.99 },
    { id: 4, name: 'Tempura', price: 12.99, },
    { id: 5, name: 'Takoyaki', price: 12.99,},
    { id: 6, name: 'EggRoll', price: 12.99,}
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToMenu = () => {
    const newItem = { id: menuItems.length + 1, name: 'New Item', price: 9.99 };
    setMenuItems([...menuItems, newItem]);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="food">
      <h2>Our Menu</h2>
      
      <div className="menu-items">
        {menuItems.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
