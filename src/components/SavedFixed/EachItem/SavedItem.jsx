import React, { useState } from "react";

export default function EachItem({
  item,
  setSavedArr,
  savedArr,
  fruitArr,
  setFruitArr,
  setCartOpen,
  setSavedOpen,
  fruitObj,
  setObj1,
}) {
  const [count, setCount] = useState(1);

  const savedToCart = (obj) => {
    if (fruitArr.indexOf(obj) !== -1) return;
    setFruitArr([...fruitArr, obj]);
    setCartOpen(true);
    setSavedOpen(false);
  };

  const removeHandler = (obj) => {
    console.log(obj.id);
    const filteredArr = savedArr.filter((el) => {
      return obj.id !== el.id;
    });
    setSavedArr(filteredArr);

    let newArr = fruitObj.map((item) => {
      if (item.id === obj.id) {
        return {
          ...item,
          like: false,
        };
      } else {
        return {
          ...item
        }
      }
      
    });
    setObj1(newArr)
  };

  return (
    <>
      <li className="cart_li_flex">
        <img src={item.img[0]} alt="img" />
        <div className="cart_desc">
          <div className="cart_head_flex">
            <p>{item.name}</p>
            <i onClick={() => removeHandler(item)} className="bx bx-x"></i>
          </div>

          <div className="cart_bot_flex">
            <div className="add_block">
              <p>${item.to_price}.00</p>
              <button onClick={() => savedToCart(item)} className="add_cl_btn">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
