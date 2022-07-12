import React from "react";
import "./Fruits.css";
import { CgNotes } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Container from "../../Container/Container";
import Fruit from "./Fruit/Fruit";
import { NavLink } from "react-router-dom";
import RecomendedProducts from "../../components/RecomendedProducts/RecomendedProducts";

export default function Fruits({
  fruitObj,
  recommended,
  savedArr,
  setSavedArr,
  setCartOpen,
  fruitArr,
  setFruitArr,
  setQuickeOpen,
  setQuikArr,
  addToCartHandler,
  setObj1
}) {
  return (
    <div className="fruits">
      <div className="fruit_organic">
        <h3>Fruits</h3>
        <div className="organic-flex">
          {" "}
          <p>Home</p> <i className="bx bx-chevron-right"></i> <p>Organics</p>
        </div>
      </div>
      <Container>
        <div className="filter_fruits">
          <div className="left_filter_div">
            <h4>Filter by: </h4>
            <h4 className="first-h4">
              <CgNotes /> Categories
            </h4>
            <h4>
              Price <MdKeyboardArrowDown />
            </h4>
            <h4>
              Status <MdKeyboardArrowDown />
            </h4>
            <p>{fruitObj.length} results</p>
          </div>

          <div className="right_sort_div">
            <p>
              Sort By{" "}
              <span>
                Latest <MdKeyboardArrowDown />
              </span>
            </p>

            <div className="short_icons">
              <BsFillGrid3X3GapFill className="active" />
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
        <div className="fruit_container_div">
          {fruitObj.map((item, index) => {
            if (item.category === "Fruits") {
              return (
                <Fruit
                  {...item}
                  key={item.id}
                  savedArr={savedArr}
                  setSavedArr={setSavedArr}
                  item={item}
                  setCartOpen={setCartOpen}
                  fruitArr={fruitArr}
                  setFruitArr={setFruitArr}
                  setQuickeOpen={setQuickeOpen}
                  setQuikArr={setQuikArr}
                  addToCartHandler={addToCartHandler}
                  setObj1={setObj1}
                  fruitObj={fruitObj}
                />
              );
            }
          })}
        </div>

        <div className="recommended_products">
          <div className="recomend_div">
            <h2>Recommended Products</h2>
            <div className="rec_div">
              {recommended.map((item) => {
                return <RecomendedProducts {...item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
