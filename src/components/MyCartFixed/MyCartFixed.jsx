import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import EachItem from "./EachItem/EachItem";
import "./MyCartFixed.css";
import nothing from "../../assets/not-found-icon.jpg";

export default function MyCartFixed({
  cartOpen,
  setCartOpen,
  fruitArr,
  setTotalPrice,
  setFruitArr,
}) {
  // const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const eachPriceHandler = (obj, count) => {
    
    let ind = fruitArr.indexOf(obj);
    let arr = fruitArr;
    arr[ind].amount += count;
    
    if (arr[ind].amount < 1) arr[ind].amount = 1
    setFruitArr([...arr])
  }

  const flatePrice = (price * 0.1 )

  const totalPrice = (price + flatePrice)
  

  return (
    <div className={`my_cart_fixed ${cartOpen ? "my_cart_fixed_open" : ""}`}>
      <div className="for_relative">
        <div
          onClick={() => setCartOpen(false)}
          className={`absolute_back ${
            cartOpen ? "absolute_back" : "absolute_back_hide"
          }`}
        >
          <i className="bx bx-chevron-right"></i>
        </div>
        <div className="my_cart_h1">
          <h1>My Cart</h1>
        </div>
        {fruitArr.length < 1 ? (
          <div className="nothing_to_cart">
            <img src={nothing} alt="img" className="not_found" />
            <h3>No products in the cart.</h3>
            <button onClick={() => setCartOpen(false)}>RETURN TO SHOP</button>
          </div>
        ) : (
          <>
            <ul className="cart_parent_ul">
              {fruitArr.map((item, i) => {
                return (
                  <EachItem
                    item={item}
                    key={i}
                    setTotalPrice={setTotalPrice}
                    fruitArr={fruitArr}
                    setFruitArr={setFruitArr}
                    eachPriceHandler={eachPriceHandler}
                    setPrice={setPrice}
                    price={price}
                  />
                );
              })}
            </ul>

            <div className="total_absolute_bottom">
              <div className="shipping_flex_cart">
                <button>
                  {" "}
                  <i className="bx bx-edit"></i> <p>Note</p>
                </button>
                <button className="center_border">
                  {" "}
                  <i className="bx bx-package"></i>
                  <p>Shipping</p>{" "}
                </button>
                <button>
                  <i className="bx bxs-coupon"></i> <p>Coupon</p>
                </button>
              </div>
              <hr className="hhr" />
              <div className="sab_total_div">
                <div className="total_each">
                  <h4>SubTotal</h4>
                  <p className="sub_price">$ {price}.00</p>
                </div>
                <div className="total_each sub_shipping">
                  <h4>Shipping</h4>
                  <p className="flate_rate">flate rate: $ {flatePrice.toFixed(0)}.00</p>
                </div>
              </div>
              <hr />
              <div className="total_div">
                <h4>Total</h4>
                <h4>$ {totalPrice.toFixed(0)}.00</h4>
              </div>
              <p className="p_center">
                Spend <span>{`$ ${160 - price}`}</span> more to reach <p>FREE SHIPPING!</p>{" "}
              </p>
              <div className="view_btns">
                <button
                  className="view_cart"
                  onClick={() => alert("Cart viewed")}
                >
                  VIEW CART
                </button>
                <button
                  className="checkout"
                  onClick={() => alert("Checked Out")}
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
