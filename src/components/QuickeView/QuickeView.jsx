import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import EachItem from "./EachItem/EachItem";
import "./QuickeView.css";
import eye from "../../assets/eye.png";

export default function MyCartFixed({
  quickOpen,
  setQuickeOpen,
  quikArr,
  setFruitArr,
  fruitArr,
  setCartOpen,
  setBrowsShow,
}) {
  return (
    <div
      className={`my_cart_fixed1 height_2 ${
        quickOpen ? "my_cart_fixed_open" : ""
      }`}
    >
      <div className="for_relative1">
        <div
          onClick={() => setQuickeOpen(false)}
          className={`absolute_back ${
            quickOpen ? "absolute_back" : "absolute_back_hide"
          }`}
        >
          <i className="bx bx-chevron-right"></i>
        </div>
        <div className="my_cart_h1 recent1"><h1>Recently Viewed</h1></div>
        {quikArr.length < 1 ? (
          <div className="nothing_to_cart">
            <img src={eye} alt="img" className="not_found" />
            <h3>No products were viewed.</h3>
            <button onClick={() => setQuickeOpen(false)}>RETURN TO SHOP</button>
          </div>
        ) : (
          <ul className="cart_parent_ul1">
            {quikArr.map((item, i) => {
              return (
                <EachItem
                  item={item}
                  key={i}
                  setFruitArr={setFruitArr}
                  fruitArr={fruitArr}
                  setCartOpen={setCartOpen}
                  setQuickeOpen={setQuickeOpen}
                  setBrowsShow={setBrowsShow}
                />
              );
            })}
          </ul>
        )}
        <></>
      </div>
    </div>
  );
}
