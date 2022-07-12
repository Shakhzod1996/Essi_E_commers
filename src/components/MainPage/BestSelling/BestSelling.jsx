import React from "react";
import "./BestSelling.css";
import Container from "../../../Container/Container";
import best from "../../../Новая папка (2)/Best";
import { Rating, Tooltip } from "@mui/material";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function BestSelling({
  setBrowsShow,
  setQuickeOpen,
  setQuikArr,
  quikArr,
}) {
  const QuikHandler = (obj) => {
    setQuickeOpen(true);
    setQuikArr([obj])
  };
  return (
    <div className="best_selling">
      <Container>
        <div className="best_selling_header_grid">
          <h3>Top Rated</h3>
          <h3>Best Selling</h3>
          <h3>On Sales</h3>
        </div>

        <div className="best_selling_item_grid">
          {best.map((item) => {
            return (
              <div className="best_item">
                <div className="best_img_div" onClick={() => QuikHandler(item)}>
                  <img src={item.img[0]} alt="img" />
                  <div className="best_img_absolute">
                    <MdOutlineZoomOutMap />
                  </div>
                </div>
                <div className="best_right_desc">
                  <NavLink
                    to={`Fruits/${item.id}`}
                    onClick={() => setBrowsShow(false)}
                  >
                    <Tooltip title={item.name}>
                      <h4>{item.name}</h4>
                    </Tooltip>
                  </NavLink>

                  <Rating className="rating" name="read-only" value={item.star} readOnly />
                  <div className="best_price_flex">
                    <p className="best_price">${item.to_price + 4}.00 </p>
                    <p className="best_price">${item.to_price}.00 </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
