import React from "react";
import "./BackDrop.css";

export default function BackDrop({
  setCartOpen,
  cartOpen,
  savedOpen,
  setSavedOpen,
  setQuickeOpen,
  quickOpen,
  setCompareOpen,
  compareOpen
}) {
  const onclicked = () => {
    setCartOpen(false);
    setSavedOpen(false);
    setQuickeOpen(false);
    setCompareOpen(false)
  };
  return (
    <div
      onClick={onclicked}
      className={`backdrop ${
        cartOpen
          ? "backdrop_show"
          : savedOpen
          ? "backdrop_show"
          : quickOpen
          ? "backdrop_show"
          : compareOpen 
          ?"backdrop_show"
          : ""
      }`}
    ></div>
  );
}
