import { Rating } from "@mui/material";
import React, { useState } from "react";
import "./Reviews.css";
import StarIcon from "@mui/icons-material/Star";

import supportImg from "../../assets/home-imgs/support-service2.jpg"

export default function Reviews() {
  const [status, setStatus] = useState("")
  return (
    <div className="reviews">
      <div className="rev_btns">
        <button  className={`${status === "description" ?"act" : status === "" ? "act" : ""}`} onClick={()=> setStatus("description")}>Description</button>
        <button className={`${status === "review" ?"act" : ""}`} onClick={()=> setStatus("review")}>Reviews(0)</button>
        <button className={`${status === "custom" ?"act" : ""}`} onClick={()=> setStatus("custom")}>Custom Tab</button>
      </div>

      <div className="rev_desc">
        <div className={`description ${status === "description" ? "desc-show" : status === "" ?  "description" : "desc-hide"}  `}>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters. On the other hand, we denounce with
            righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desire.  
          </p>

          <p>It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.</p>
        </div>

        <div className={`review_desc ${status === "review" ? "desc-show" : "desc-hide"}`}>
          <p className="review_p">
            0.00 <span>Overall</span>
          </p>

          <div className="stars_flex">
            <Rating
            className="rate"
              name="text-feedback"
              value={5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div className="div_width"></div>
            <p className="percent">0 %</p>
          </div>

          <div className="stars_flex">
            <Rating
            className="rate"
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div className="div_width"></div>
            <p className="percent">0 %</p>
          </div>

          <div className="stars_flex">
            <Rating
            className="rate"
              name="text-feedback"
              value={3}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div className="div_width"></div>
            <p className="percent">0 %</p>
          </div>

          <div className="stars_flex">
            <Rating
            className="rate"
              name="text-feedback"
              value={2}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div className="div_width"></div>
            <p className="percent">0 %</p>
          </div>

          <div className="stars_flex">
            <Rating
            className="rate"
              name="text-feedback"
              value={1}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div className="div_width"></div>
            <p className="percent">0 %</p>
          </div>

          <h3>Reviews</h3>

          <p className="no_reviews">There are no reviews yet.</p>
        </div>

        <div className={`custom_tab ${status === "custom" ? "desc-show" : "desc-hide"}`}>
          <h3>Used for all products of this categories</h3>
          <p>If issues experienced with the frame include a manufacturer's defect, or an issue resulting from an inherent flaw in the product, we provides a 365 days warranty from the time of purchase. If you feel your product meets these requirements, please email elessi@domain.com explaining the nature of your warranty claim and all necessary details.</p>

          <div className="custom_flex">
              <img src={supportImg} alt="img" />
              <div className="right_support">
                <h3>Repair and Service</h3>
                <p>We believe in crafting pieces where sustainability and style go hand in hand. Made from materials like recycled cashmere and sust</p>
                <a href="/">Read more</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
