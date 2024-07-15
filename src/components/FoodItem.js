import React from 'react';
import './FoodItem.css';

 export const FoodItem = ({ item, addToCart }) => {
  return (
    <div className="food-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
