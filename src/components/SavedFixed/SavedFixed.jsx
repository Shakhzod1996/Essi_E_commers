import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import EachItem from "./EachItem/SavedItem";
import "./SavedFixed.css";
import nothing from "../../assets/not-found-icon.jpg";

export default function MyCartFixed({
  setSavedArr,
  savedArr,
  savedOpen,
  setSavedOpen,
  fruitArr,
  setFruitArr,
  setCartOpen,
  fruitObj,
  setObj1,
}) {
  return (
    <div className={`my_cart_fixed ${savedOpen ? "my_cart_fixed_open" : ""}`}>
      <div className="for_relative">
        <div
          onClick={() => setSavedOpen(false)}
          className={`absolute_back ${
            savedOpen ? "absolute_back" : "absolute_back_hide"
          }`}
        >
          <i className="bx bx-chevron-right"></i>
        </div>
        <div className="my_cart_h1">
          <h1>Wishlist</h1>
        </div>
        {savedArr.length < 1 ? (
          <div className="nothing_to_cart">
            <img src={nothing} alt="img" className="not_found" />
            <h3>No products in the Wishlist.</h3>
            <button onClick={() => setSavedOpen(false)}>RETURN TO SHOP</button>
          </div>
        ) : (
          <>
            <ul className="cart_parent_ul saved_ul">
              {savedArr.map((item, i) => {
                return (
                  <EachItem
                    item={item}
                    key={i}
                    savedArr={savedArr}
                    setSavedArr={setSavedArr}
                    fruitArr={fruitArr}
                    setFruitArr={setFruitArr}
                    setSavedOpen={setSavedOpen}
                    setCartOpen={setCartOpen}
                    fruitObj={fruitObj}
                    setObj1={setObj1}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
