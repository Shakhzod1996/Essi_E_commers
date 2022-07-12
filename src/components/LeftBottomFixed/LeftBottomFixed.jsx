import React from "react";
import "./LeftBottomFixed.css";
import imgAbsolute from "../../assets/home-imgs/envato-white.png";
import { IconButton, Tooltip } from "@mui/material";

export default function LeftBottomFixed({demoUse}) {
  
  return (
    <div className={`left_bottom_fixed ${demoUse ? "left_bottom_fixed_change" : ""}`}>
      <a href="https://themeforest.net/item/elessi-woocommerce-ajax-wordpress-theme/20968615?irgwc=1&clickid=22SUY-XEcxyIWlszN%3A0wnXCVUkD1UuWDlXBmU80&iradid=275988&irpid=1326536&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1326536&utm_medium=affiliate&utm_source=impact_radius">
        <Tooltip title="Purchase Now" placement="right" arrow>
          <div className="for_shadow">
            <div className="fixed_price_div_relative">
              <div>
                <p>$</p>
                <span>59</span>
              </div>
              <div className="fixed_price_absolute">
                <img src={imgAbsolute} alt="img" />
              </div>
            </div>
          </div>
        </Tooltip>
      </a>
    </div>
  );
}
