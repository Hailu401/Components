import React,  {useState} from 'react';
import './Product.css';
import {useStateValue} from './StatePovider';
function Product({id, title, price, image, rating}) {
const [{ basket }, dispatch] = useStateValue();
// console.log('this is basket',basket)

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div className="product">
        <div className="Product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
}

export default Product;
