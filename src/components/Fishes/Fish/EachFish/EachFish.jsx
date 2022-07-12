import React, { useState } from "react";
import "./EachFish.css";
import { useLocation } from "react-router-dom";
import Container from "../../../../Container/Container";
import fair from "../../../../assets/home-imgs/flame.png";

import Zoom from "react-img-zoom";
import { Tooltip } from "@mui/material";
import { recommended } from "../../../../Recommend";
import RecomendedProducts from "../../../../components/RecomendedProducts/RecomendedProducts";
import Reviews from "../../../Reviews/Reviews";

export default function EachFruit({ fruitObj, setCartOpen, setFruitArr, fruitArr}) {
  let location = useLocation();

  const [imgMove, setImgMove] = useState(false);
  const [count, setCount] = useState(1);

  const imgSliderBottom = () => {
    setImgMove(true);
  };

  const imgSliderTop = () => {
    setImgMove(false);
  };

  const addToCartHandler = (obj) => {
    setCartOpen(true)
    if (fruitArr.indexOf(obj) !== -1) return;
    setFruitArr([...fruitArr, obj])
    console.log(fruitArr);
  }

  return (
    <div className="each_fruit">
      {fruitObj.map((item) => {
        if (item.id === +location.pathname.split("/").at(-1)) {
          return (
            <>
              <div className="fruit_organic">
                <h3 className="each_fruit_name">{item.name}</h3>
                <div className="organic-flex">
                  {" "}
                  <p>Home</p> <i className="bx bx-chevron-right"></i>{" "}
                  <p>Organics</p>
                  <i className="bx bx-chevron-right"></i>
                  <p>Sea Food</p>
                  <i className="bx bx-chevron-right"></i>
                  <p>Daily Sea Food</p>
                </div>
              </div>
              <div className="main_div_each_fruit">
                <Container>
                  <div className="each_fruit_flex">
                    <div className="left_each_fruit">
                      <div className="left_img_flex">
                        <div className="img_buttons">
                          <img
                            src={item.img[0]}
                            className={`${imgMove ? "" : "img_active"}`}
                            onClick={imgSliderTop}
                            alt="img"
                          />
                          <img
                            src={item.img[1]}
                            className={`${imgMove ? "img_active" : ""}`}
                            alt="img"
                            onClick={imgSliderBottom}
                          />
                        </div>

                        <div className="big_slider_imgs">
                          <div
                            className={`img_for_move ${
                              imgMove ? "img_moved" : ""
                            }`}
                          >
                            <Zoom
                              img={item.img[0]}
                              zoomScale={2}
                              width={500}
                              height={500}
                            ></Zoom>
                            <Zoom
                              img={item.img[1]}
                              zoomScale={2}
                              width={500}
                              height={500}
                              cursor="pointer"
                            ></Zoom>
                          </div>

                          <div className="wish_btns">
                            <Tooltip title="Wishlist" placement="right" arrow>
                              <button>
                                <i className="bx bx-heart"></i>
                              </button>
                            </Tooltip>

                            <Tooltip title="Compare" placement="right" arrow>
                              <button>
                                <i className="bx bx-reset"></i>
                              </button>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="right_each_fruit">
                      <div className="each_fruit_header_flex">
                        <h2>{item.name}</h2>
                        <div className="each_fruit_header_btns">
                          <Tooltip title="Prev fruit" arrow placement="bottom">
                            <button>
                              <i className="bx bx-chevron-left"></i>
                            </button>
                          </Tooltip>
                          <Tooltip title="Next fruit" arrow placement="bottom">
                            <button>
                              <i className="bx bx-chevron-right"></i>
                            </button>
                          </Tooltip>
                        </div>
                      </div>
                      <h3 className="fruit_price">
                        $ {item.to_price * count.toFixed(2)}.00
                      </h3>
                      <div className="sold_div_flex">
                        <img src={fair} alt="img" />
                        <p>
                          {item.sold} sold in last {item.sold_hours} hours
                        </p>
                      </div>
                      <span className="lorem">{item.some_about}</span>

                      <div className="btns_flex_add">
                        <div className="each_fruit_quantity_flex">
                          <p>{count}</p>
                          <div className="quantity_btns">
                            <button onClick={() => setCount(count + 1)}>
                              +
                            </button>
                            <button
                              onClick={() =>
                                setCount(count > 1 ? count - 1 : 1)
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="add_cart_flex">
                          <button onClick={() =>addToCartHandler(item)}>
                            ADD TO CART
                          </button>
                          <button>BUY NOW</button>
                        </div>
                      </div>

                      <div className="delivery_div">
                        <button>
                          <i className="bx bx-package"></i>Delivery & Return
                        </button>
                        <button>
                          <i className="bx bx-question-mark"></i>Ask a Question
                        </button>
                      </div>

                      <p className="estimate">
                        <i className="bx bxs-package"></i>Estimated Delivery:{" "}
                        <span>Jul 09 – Jul 13</span>
                      </p>

                      <p className="peope_smile">
                        <i className="bx bx-smile"></i>
                        <span>{item.views} people</span> are viewing this right
                        now
                      </p>

                      <div className="share_flex">
                        <div className="share">
                          <i className="bx bx-share-alt"></i>
                          <p>Share</p>
                        </div>
                        <div className="links_flex">
                          <i className="bx bxl-twitter"></i>
                          <i className="bx bxl-facebook"></i>
                          <i className="bx bx-envelope"></i>
                          <i className="bx bxl-instagram"></i>
                        </div>
                      </div>

                      <div className="trust_div">
                        <p className="guarant">Guaranteed Safe Checkout</p>
                        <img src={item.Guaranteed} alt="img" />
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </>
          );
        }
      })}
      <Container>
        <Reviews />
        <div className="recommended_products">
          <div className="recomend_div">
            <h2>Related Products</h2>
            <div className="rec_div">
              {recommended.map((item) => {
                return <RecomendedProducts {...item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
