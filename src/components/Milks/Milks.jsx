import React, { useState } from "react";
import "./Milks.css";
import { CgNotes } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import Container from "../../Container/Container";
import Milk from "./Milk/Milk";
import RecomendedProducts from "../../components/RecomendedProducts/RecomendedProducts";
import { NavLink } from "react-router-dom";

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

  const [block, setBlock] = useState(false)
  return (
    <div className="fruits">
      <div className="fruit_organic">
        <h3>Milk and Cream</h3>
        <div className="organic-flex">
          {" "}
          <p>Home</p> <i className="bx bx-chevron-right"></i> <p>Organics</p>
          <i className="bx bx-chevron-right"></i> <p>Drinks</p>
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
            <p className="just_result">{fruitObj.length} results</p>
          </div>

          <div className="right_sort_div">
            <p>
              Sort By{" "}
              <span>
                Latest <MdKeyboardArrowDown />
              </span>
            </p>

            <div className="short_icons">
              <BsFillGrid3X3GapFill onClick={()=> setBlock(false)} className={`${block ? "" : "active"}`} />
              <GiHamburgerMenu onClick={()=> setBlock(true)} className={`${block ? "active" : ""}`} />
            </div>
          </div>
        </div>
        <div className={`${block ? "fruit_container_div" : "fruit_container_div"}`}>
          {fruitObj.map((item, index) => {
            if (item.category === "Milks & Creams") {
              return (
                <Milk
                  {...item}
                  key={item.id}
                  item={item}
                  setSavedArr={setSavedArr}
                  savedArr={savedArr}
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
                return (
                  <RecomendedProducts
                    {...item}
                    key={item.id}
                    setCartOpen={setCartOpen}
                    fruitArr={fruitArr}
                    setFruitArr={setFruitArr}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
