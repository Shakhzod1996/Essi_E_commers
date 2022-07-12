import React from "react";
import { NavLink } from "react-router-dom";
import "./ShoNow.css";
import Container from "../../../Container/Container";
import img1 from "../../../assets/organic-banner1.jpg";
import img2 from "../../../assets/organic-banner2.jpg";
import img3 from "../../../assets/organic-banner3.jpg";
import { Tooltip } from "@mui/material";

export default function ShopNow({setBrowsShow}) {
  return (
    <div className="shop_now">
      <Container>
        <div className="shop_now_grid">
          <div className="shop_grid_item_flex">
            <div className="shop_desc">
              <h3>
                Joobie <br /> Ice Cream
              </h3>
              <p className="sale_off_shop">
                Sale Off <span>25%</span>
              </p>
              <NavLink to="milks" onClick={()=> setBrowsShow(false)}>
                <Tooltip title="Shop Now">
                  <button>Shop Now</button>
                </Tooltip>
              </NavLink>
            </div>

            <img src={img1} alt="img" />
          </div>

          <div className="shop_grid_item_flex">
            <div className="shop_desc">
              <h3>
                Fresh <br /> Guava Juice
              </h3>
              <NavLink to="fruits" onClick={()=> setBrowsShow(false)}>
                <Tooltip title="Shop Now">
                  <button>Shop Now</button>
                </Tooltip>
              </NavLink>
            </div>

            <img src={img2} alt="img" />
          </div>

          <div className="shop_grid_item_flex">
            <div className="shop_desc">
              <h3>
                Fresh <br /> Vegetables
              </h3>
              <NavLink to="vegetables"  onClick={()=> setBrowsShow(false)}>
                <Tooltip title="Shop Now">
                  <button>Shop Now</button>
                </Tooltip>
              </NavLink>
            </div>

            <img src={img3} alt="img" />
          </div>
        </div>
      </Container>
    </div>
  );
}
