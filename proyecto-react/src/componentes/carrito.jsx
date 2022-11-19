import React, { useState, useEffect } from "react";
import styled from '@emotion/styled'




const Cart = ({ cart, setCart, handleChange ,handleQuit  }) => {
    const [price, setPrice] = useState(0);
  
    const handleRemove = (id) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
      handleQuit();
    };
  
    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => (ans += item.amount * item.price));
      setPrice(Math.round(ans));
    };
  
    useEffect(() => {
      handlePrice();
    });
  
    return (
      <Carrito>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span className="total-text"> Total de tu carrito </span>
          <span> $ {price}</span>
        </div>
      </Carrito>
    );
  };
  

  export default Cart
  const Carrito = styled.article`

  * {
  margin: 0;
  padding: 0;
}


  width: 60%;
  margin: auto;

.cart_box img {
  width: 50px;
  height: 50px;
}
.cart_img {
  display: flex;
  width: 400px;
}

.cart_img p {
  font-weight: bold;
  margin-left: 10px;
}

.cart_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
}

.cart_box div:nth-child(2) button {
  padding: 5px 10px;
  font-weight: bold;
  margin-right: 5px;
}

.cart_box div:nth-child(3) button {
  padding: 5px 10px;
  font-weight: bold;
  letter-spacing: 2px;
  border: none;
  outline: none;
  color: white;
  background-color: #000;
  border-radius: 5px;
  cursor: pointer;
}
.cart_box div:nth-child(3) button:hover {
  background-color: #fff;
  color:#000
}
.cart_box div:nth-child(3) span {
  background-color: lightgreen;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
}

.total {
  color: #000;
  display: flex;
  justify-content: space-between;
}

.total-text{
  color: #000;
}

.total span:nth-child(1) {
  font-size: 2rem;
  color:#000;
  font-weight: bold;
  letter-spacing: 2px;
}

.total span:nth-child(2) {
  font-size: 2rem;
  color: #000;
  font-weight: bold;
}


  `