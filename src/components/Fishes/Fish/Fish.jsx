import React, { useEffect, useState } from "react";
import "./Fish.css";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineRestartAlt,
} from "react-icons/md";
import { FiEye, FiShoppingBag } from "react-icons/fi";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Fruit({
  name,
  img,
  to_price,
  id,
  setSavedArr,
  savedArr,
  item,
  setCartOpen,
  fruitArr,
  setFruitArr,
  setQuickeOpen,
  setQuikArr,
  addToCartHandler,
  fruitObj,
  setObj1

}) {
  const [moveImg, setMoveImg] = useState(false);
  const [status, setStatus] = useState(false);

  const rightBtnClicked = () => {
    setMoveImg(true);
  };

  const leftBtnClicked = () => {
    setMoveImg(false);
  };
  const savedClickedHandler = (obj) => {
    if (savedArr.indexOf(obj) !== -1) return;
    setSavedArr([obj, ...savedArr ]);
    setTimeout(() => {
      setStatus(true);
    }, 400);
    let newArr = fruitObj.map((item) => {
      if (item.id === obj.id) {
        return {
          ...item,
          like: true,
        };
      } else {
        return {
          ...item
        }
      }
    });

    setObj1(newArr);
  };

  const savedClickedHandler2 = (obj) => {
    setTimeout(() => {
      setStatus(false);
    }, 400);

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

    setObj1(newArr);
    const filtered = savedArr.filter((it) => {
      return it.id !== obj.id
    })
    setSavedArr(filtered)
  };

  const quikViewHandler = (obj) => {
    setQuickeOpen(true);
    setQuikArr([obj]);
  };

  return (
    <div className="fruit_item">
      {status ? (
        <BsFillSuitHeartFill
          onClick={() => savedClickedHandler2(item)}
          className="absolute_svg filled"
        />
      ) : (
        <BsSuitHeart
          className="absolute_svg"
          onClick={() => savedClickedHandler(item)}
        />
      )}
      <div className="img_div">
        <NavLink to={`${id}`} key={id}>
          <div className={`img_move ${moveImg ? "img_move-active" : null}`}>
            <img src={img[0]} alt="img" />
            <img src={img[1]} alt="img" />
          </div>
        </NavLink>
      </div>

      <div className="move_btns_div">
        <div
          className={`left-btn ${moveImg ? "" : "right-dec"}`}
          onClick={leftBtnClicked}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          className={`right-btn ${moveImg ? "right-dec" : ""}`}
          onClick={rightBtnClicked}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>

      <div className="bottom_btns">
        <div onClick={()=> addToCartHandler(item)}>
          <Tooltip title="Add to Cart">
            <IconButton>
              <FiShoppingBag />
            </IconButton>
          </Tooltip>
        </div>
        <div className="center_btn_div" onClick={()=> quikViewHandler(item)}>
          <Tooltip title="Quick View">
            <IconButton>
              <FiEye />
            </IconButton>
          </Tooltip>
        </div>
        <div onClick={()=> alert("We will Compare a bit later")}>
          <Tooltip title="Compare">
            <IconButton>
              <MdOutlineRestartAlt />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <NavLink className="navlink" to={`${id}`} key={id}>
        <div className="fruit_desc">
          <h3>{name}</h3>
          <div className="fruit_desc_flex">
            <p>$ {to_price}.00</p>

            <div className="fruit_different_prices">
              <div>
                <p>1</p> <p>KG</p>
              </div>
              <div>
                <p>500</p> <p>G</p>
              </div>
              <div>
                <p>250</p> <p>G</p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
