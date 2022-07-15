import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./EachItem.css";

export default function EachItem({
  item,
  setTotalPrice,
  totalPrice,
  fruitArr,
  setFruitArr,
  setCartOpen,
  setQuickeOpen,
  setBrowsShow,
}) {
  const [count, setCount] = useState(1);

  const incrementCart = (eachPrice) => {
    setCount(count + 1);
    setTotalPrice(totalPrice + eachPrice * 1);
  };

  const decrementCart = (eachPrice) => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalPrice - eachPrice);
    }
  };

  const addToCartHandler = (obj) => {
    setQuickeOpen(false);
    setCartOpen(true);
    if (fruitArr.indexOf(obj) !== -1) return;
    setFruitArr([...fruitArr, obj]);
    console.log(fruitArr);
  };

  const gotoFruitHandler = () => {
    setQuickeOpen(false);
    setBrowsShow(false);
  };

  return (
    <>
      <div className="div_quik">
        <img src={item.img[0]} alt="img" className="l_img" />
        <img src={item.img[1]} alt="img" className="l_img1" />
        <NavLink to={`Fruits/${item.id}`} onClick={gotoFruitHandler}>
          <h2 className="quick_each_h2">{item.name}</h2>
        </NavLink>

        <div className="quik_price_flex">
          <p>${item.to_price + 4}.00</p>
          <p>${item.to_price}.00</p>
        </div>
        <p className="lorem1">{item.some_about}</p>
        <div className="days_div_flex days2">
          <div>
            <p>174</p>
            <p>DAYS</p>
          </div>
          <div>
            <p>00</p>
            <p>HURS</p>
          </div>
          <div>
            <p>42</p>
            <p>MINS</p>
          </div>
          <div>
            <p>28</p>
            <p>SECS</p>
          </div>
        </div>

        <p className="left">
          Only <span>{Math.floor(Math.random() * 100)}</span> item(s) left in stock.
        </p>
        <div className="width_quick_back">
          <div className="width_quick_green"></div>
        </div>

        <div className="btns_flex_add">
          <div className="each_fruit_quantity_flex">
            <p>{count}</p>
            <div className="quantity_btns">
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                -
              </button>
            </div>
          </div>
          <div className="add_cart_flex">
            <button onClick={() => addToCartHandler(item)}>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>

        <div className="share_flex">
          <div className="share">
            <i className="bx bx-share-alt"></i>
            <p>Share</p>
          </div>
          <div className="links_flex">
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-facebook"></i>
            <i className="bx bx-envelope"></i>
            <i className="bx bxl-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}
