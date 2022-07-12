import React from "react";
import "./CompareFixed.css";
import img from "../../assets/placeholder.jpg";
import Container from "../../Container/Container";

export default function CompareFixed({ compareOpen, setCompareOpen }) {
  return (
    <div
      className={`compare_fixed ${compareOpen ? "compare_fixed_show" : null}`}
    >
      <div className="cancel" onClick={() => setCompareOpen(false)}>
        <i className="bx bx-x"></i>
      </div>
      <Container>
        <div className="compare_flex">
          <div className="compare_products_left">
            <h2>Compare Products</h2>
            <h3>(0 Products)</h3>
          </div>

          <div className="compare_products_right">
            <img src={img} alt="img" />
            <img src={img} alt="img" />
            <img src={img} alt="img" />
            <img src={img} alt="img" />
          </div>
        </div>
      </Container>
    </div>
  );
}
