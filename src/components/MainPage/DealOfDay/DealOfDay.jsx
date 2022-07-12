import React, { useState } from "react";
import { useEffect } from "react";
import Container from "../../../Container/Container";
import dealObj from "../../../Новая папка (2)/DealObj";
import "./DealOfDay.css";

export default function DealOfDay({setFruitArr, fruitArr, setCartOpen,}) {
  const [value, setValue] = useState(0)
  const [obj, setObj] = useState(dealObj);

  const { img, name, to_price, sold, available, day, hour, min, sec } = obj[value]
  
  const nextWithIndex = (index) => {
    setValue(index)
  };

  const addToMyCart = (obj) => {
    if (fruitArr.indexOf(obj) !== -1) return
    setFruitArr([obj, ...fruitArr])
    setCartOpen(true)
  }
  return (
    <div className="deal_of_day">
      <Container>
        <div className="deal_inside_flex">
          <div className="left_deal">
            <h2>Deal of the Day</h2>
            <div className="deal_item_flex">
              <div className="left_img_item">
                <img src={img[0]} alt="img" />
              </div>
              <div className="right_img_item">
                <p>CHILIES, GARLIC, LEMON, FRESH</p>
                <h2>{name}</h2>
                <div className="prices_flex">
                  <p className="line_through">${to_price + 4}.00</p>
                  <p>${to_price}.00</p>
                </div>
                <div className="days_div_flex">
                  <div>
                    <p>{day}</p>
                    <p>DAYS</p>
                  </div>
                  <div>
                    <p>{hour}</p>
                    <p>HURS</p>
                  </div>
                  <div>
                    <p>{min}</p>
                    <p>MINS</p>
                  </div>
                  <div>
                    <p>{sec}</p>
                    <p>SECS</p>
                  </div>
                </div>
                <div className="sold_flex">
                  <p>
                    Already sold: <span>{sold}</span>
                  </p>
                  <p>Available: {available}</p>
                </div>

                <div className="width_relative">
                  <div className="width_absolute"></div>
                </div>
                <button className="deal_add_btn" onClick={()=>addToMyCart(obj[value])}>ADD TO CART</button>
              </div>
            </div>
          </div>

          <div className="right_deal">
            {dealObj.map((item, index) => {
              return (
                <div
                  className={`buton_img ${index === value && 'active-btn'}`}
                  key={index}
                  onClick={() => nextWithIndex(index)}
                >
                  <img src={item.img[0]} alt="img" />
                  <div className="right_img_buton">
                    <h4>{item.name}</h4>
                    <div className="prices_flex_right">
                      <p>${item.to_price + 4}.00</p>
                      <p>${item.to_price}.00</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
