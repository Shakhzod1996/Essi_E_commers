import React, { useEffect, useState } from "react";

export default function EachItem({
  item,
  fruitArr,
  setFruitArr,
  eachPriceHandler,
  setPrice
}) {


  const removeHandler = (id) => {
    const filteredArr = fruitArr.filter((item) => {
      return id !== item.id;
    });

    setFruitArr(filteredArr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    fruitArr.map((item) => (ans += item.amount * item.to_price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <li className="cart_li_flex">
        <img src={item.img[0]} alt="img" />
        <div className="cart_desc">
          <div className="cart_head_flex">
            <p>{item.name}</p>
            <i onClick={() => removeHandler(item.id)} className="bx bx-x"></i>
          </div>

          <div className="cart_bot_flex">
            <div>
              <div>
                <p>{item.amount}</p>
                <div className="btn_div_cart">
                  <button onClick={() => eachPriceHandler(item, 1)}>+</button>
                  <button onClick={() => eachPriceHandler(item, -1)}>-</button>
                </div>
              </div>
              <p>x $ {item.to_price}.00</p>
            </div>

            <p>$ {item.to_price * item.amount}.00</p>
          </div>
        </div>
      </li>
    </>
  );
}
