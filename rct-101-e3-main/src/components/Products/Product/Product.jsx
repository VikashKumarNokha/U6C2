import React, { useState } from "react";
 

const Product = ({props}) => {
    console.log("PPP: ",props);
  // Note: this id should come from api
  // const product = { id: 1 };
    const [count,setCount] = useState(1);
  return (
       <div>
         {
         props.map((e)=>(

    <div data-cy={`product-${e.id}`} key={e.id}>
      <h3 data-cy="product-name">{e.name}</h3>
      <h6 data-cy="product-description">{e.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
             count
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
         ))  
     }
    </div>   
  );
        
};

export default Product;
