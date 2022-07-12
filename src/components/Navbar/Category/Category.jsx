import React from "react";
import { NavLink } from "react-router-dom";
import "./Category.css";
import { FaLemon, FaCarrot, FaFish } from "react-icons/fa";
import { BiDrink, BiCake } from "react-icons/bi";
import { BsEggFried, BsFillTreeFill } from "react-icons/bs";
import { TbMeat } from "react-icons/tb";
import { GiGrapes, GiBananaPeeled, GiPotato } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Category({browsShow, setBrowsShow}) {
  return (
    <ul className={`${browsShow ? "category" : "category-hide"}`}>
      <li>
        <NavLink to="fruits" onClick={()=> setBrowsShow(false)}>
          <div>
            <FaLemon /> Fruits
          </div>
          <MdKeyboardArrowRight />
        </NavLink>

        <div className="fruit-hover_flex">
          <div className="fresh_div">
            <h3>Fresh Fruit</h3>
            <ul className="fresh_ul">
              <li>Apple and Banana</li>
              <li>Berries</li>
              <li>Grapes</li>
              <li>Mangoes</li>
              <li>Melons</li>
              <li>Pears</li>
              <li>Plums and Apricots</li>
              <li>Seasons</li>
            </ul>
          </div>

          <div className="nut_div">
            <h3>Nut Gifts</h3>
            <ul>
              <li>Avocado and Peppers</li>
              <li>Broccoli and Zucchini</li>
              <li>Celery, Fennel and Leeks</li>
              <li>Heirloom and Tomatoes</li>
              <li>Lettuce and Leafy</li>
              <li>Mushrooms</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="vegetables" onClick={()=> setBrowsShow(false)}>
          <div>
            <FaCarrot /> Vegetables
          </div>
          <MdKeyboardArrowRight />
        </NavLink>
        <div className="vegetables-hover">
          <div className="fresh_div">
            <h3>Daily Vegetables</h3>
            <ul className="fresh_ul">
              <li>Beans and Brinjals</li>
              <li>Chilies, Garlic Lemon</li>
              <li>Gourd Cucumber</li>
              <li>Herbs and Sprouts</li>
              <li>Peppers and Lady Fingers</li>
              <li>Root Vegetables</li>
            </ul>
          </div>

          <div className="nut_div">
            <h3>Exotic Vegetables</h3>
            <ul>
              <li>Avocados and Peppers</li>
              <li>Broccoli and Zucchini</li>
              <li>Celery, Fennel and Leeks</li>
              <li>Heirloom and Tomatoes</li>
              <li>Lettuce and Leafy</li>
              <li>Mushrooms</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="milks" onClick={()=> setBrowsShow(false)}>
          <div>
            <BiDrink />
            Drinks
          </div>{" "}
          <MdKeyboardArrowRight />
        </NavLink>

        <div className="drink_hover">
          <div>
            <ul>
              <li>Milk and Creams</li>
              <li>Organic Lemon</li>
              <li>Organic Almaverde</li>
              <li>Orange Cauliflower</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="butters" onClick={()=> setBrowsShow(false)}>
          <div>
            <BsEggFried /> Butter and Eggs
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="trees"  onClick={()=> setBrowsShow(false)}>
          <div>
            <BsFillTreeFill /> Trees
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="cakes"  onClick={()=> setBrowsShow(false)}>
          <div>
            <BiCake /> Cakes
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="meats"  onClick={()=> setBrowsShow(false)}>
          <div>
            <TbMeat /> Meats
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="fish"  onClick={()=> setBrowsShow(false)}>
          <div>
            <FaFish /> Fish
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="onion"  onClick={()=> setBrowsShow(false)}>
          <div>
            <FaLemon /> Onion
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="grapes"  onClick={()=> setBrowsShow(false)}>
          <div>
            <GiGrapes /> Grapes
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="bananas"  onClick={()=> setBrowsShow(false)}>
          <div>
            <GiBananaPeeled /> Banana
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink to="potatoes"  onClick={()=> setBrowsShow(false)}>
          <div>
            <GiPotato /> Potatoes
          </div>
        </NavLink>
      </li>
    </ul>
  );
}
