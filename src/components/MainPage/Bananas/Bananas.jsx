import React, { useState } from "react";
import "./Bananas.css";
import { CgNotes } from "react-icons/cg";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiBananaPeeled, GiHamburgerMenu } from "react-icons/gi";

import Banana from "./Banana/Banana";
import Container from "../../../Container/Container";
import { FaCarrot, FaFish, FaLemon } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

export default function Fruits({
  fruitObj,
  savedArr,
  setSavedArr,
  setBrowsShow,
  setFruitArr,
  fruitArr,
  setCartOpen,
  setQuickeOpen,
  quikArr,
  setQuikArr,
  addToCartHandler,
  setObj1
}) {
  const [type, setType] = useState("Fruits");

  const FruitClickedHandler = () => {
    setType("Fruits");
  };
  const VegClickedHandler = () => {
    setType("Vegetables");
  };
  const MilkClickedHandler = () => {
    setType("Milks & Creams");
  };
  const BananaClickedHandler = () => {
    setType("Banana");
  };

  const FishClickedHandler = () => {
    setType("SeaFood");
  };
  return (
    <div className="fruits">
      <Container>
        <div className="featured">
          <h2>Featured Products</h2>
          <div className="featured_btns">
            <button
              className={`${type === "Fruits" ? "active-1" : null}`}
              onClick={FruitClickedHandler}
            >
              <FaLemon />
              <p>Fruit</p>{" "}
            </button>
            <button
              className={`${type === "Vegetables" ? "active-1" : null}`}
              onClick={VegClickedHandler}
            >
              <FaCarrot />
              <p>Vegetable</p>
            </button>
            <button
              className={`${type === "Milks & Creams" ? "active-1" : null}`}
              onClick={MilkClickedHandler}
            >
              <BiDrink />
              <p>Milk</p>{" "}
            </button>
            <button
              className={`${type === "Banana" ? "active-1" : null}`}
              onClick={BananaClickedHandler}
            >
              <GiBananaPeeled />
              <p>Banana</p>
            </button>
            <button
              className={`${type === "SeaFood" ? "active-1" : null}`}
              onClick={FishClickedHandler}
            >
              <FaFish />
              <p>SeaFood</p>{" "}
            </button>
          </div>
          <div className="fruit_container_div">
            {fruitObj.map((item, index) => {
              if (item.category === type) {
                return (
                  <Banana
                    type={type}
                    {...item}
                    key={item.id}
                    savedArr={savedArr}
                    setSavedArr={setSavedArr}
                    item={item}
                    setBrowsShow={setBrowsShow}
                    setCartOpen={setCartOpen}
                    setFruitArr={setFruitArr}
                    fruitArr={fruitArr}
                    setQuickeOpen={setQuickeOpen}
                    quikArr={quikArr}
                    setQuikArr={setQuikArr}
                    addToCartHandler={addToCartHandler}
                    setObj1={setObj1}
                    fruitObj={fruitObj}
                  />
                );
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
