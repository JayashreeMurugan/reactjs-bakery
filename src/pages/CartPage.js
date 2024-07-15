import React, { useState } from 'react';
import './CartPage.css';

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 12.99, quantity: 1},
    { id: 2, name: 'Burger', price: 12.99, quantity: 1},
    { id: 3, name: 'Pasta', price: 12.99, quantity: 1},
    { id: 4, name: 'Tempura', price: 12.99, quantity: 1},
    { id: 5, name: 'Takoyaki', price: 12.99, quantity: 1},
    { id: 6, name: 'EggRoll', price: 12.99, quantity: 1},
  ]);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity +1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity -1 } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
