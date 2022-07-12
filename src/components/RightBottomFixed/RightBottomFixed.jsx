import React from "react";
import "./RightBottomFixed.css";
import { BsClock } from "react-icons/bs";
import { Tooltip } from "@mui/material";
export default function RightBottomFixed({ setQuickeOpen, setDemoUse, demoUse }) {

  const demoChangeHandler = () => {
    setDemoUse(!demoUse)
  }
  return (
    <div className={`right_bottom_fix ${demoUse? "right_change": ""}`}>
      <Tooltip title="Recently Viewed" placement="left" arrow>
        <div className="clock" onClick={() => setQuickeOpen(true)}>
          <BsClock />
        </div>
      </Tooltip>

      <Tooltip title="Switch RTX" placement="left" arrow>
        <div className="rtl" onClick={demoChangeHandler}>
          <p>RTL</p>
        </div>
      </Tooltip>

      <Tooltip placement="left" title="More Demos" arrow>
        <div className="demo" onClick={() => alert("Here should go something")}>
          <p>DEMO</p>
        </div>
      </Tooltip>
    </div>
  );
}
