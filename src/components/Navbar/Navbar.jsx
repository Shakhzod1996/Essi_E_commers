import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../../Container/Container";
import Category from "./Category/Category";
import "./Navbar.css";
import img1 from "../../assets/home-imgs/menu-h1.jpg";
import img2 from "../../assets/home-imgs/homepage-t-shirt.jpg";
import img3 from "../../assets/home-imgs/homepage-cosmetic.jpg";
import img4 from "../../assets/home-imgs/menu-h-baby-1.jpg";
import img5 from "../../assets/home-imgs/homepage-watches-dark.jpg";
import img6 from "../../assets/home-imgs/home-auto-part-3.jpg";
import img7 from "../../assets/home-imgs/homepage-medical-1.jpg";
import img8 from "../../assets/home-imgs/homepage-accessories.jpg";
import img9 from "../../assets/home-imgs/menu-h9.jpg";
import img10 from "../../assets/home-imgs/menu-h1.jpg";


export default function Navbar({browsShow, setBrowsShow}) {
  return (
    <div className="navbar">
      <Container>
        <div className="navbar-flex">
          <div className="brows-div">
            <i className="bx bx-list-ul"></i>
            <h3>BROWSE CATEGORIES</h3>
            <Category browsShow={browsShow} setBrowsShow={setBrowsShow}/>
          </div>

          <ul className="center-nav-ul">
            <li>
              <NavLink to="/">
                <p>HOME </p> <i className="bx bx-chevron-down"></i>
              </NavLink>
              <div className="home_hover">
                <Container>
                <div className="home_hover_grid">
                  <div>
                  <img src={img1} alt="img" />
                  <h3>FASHION</h3>
                  </div>

                  <div>
                  <img src={img2} alt="img" />
                  <h3>T-SHIRT</h3>
                  </div>

                  <div>
                  <img src={img3} alt="img" />
                  <h3>COSMETICS</h3>
                  </div>

                  <div>
                  <img src={img4} alt="img" />
                  <h3>BABY</h3>
                  </div>

                  <div>
                  <img src={img5} alt="img" />
                  <h3>WATCHES</h3>
                  </div>

                  <div>
                  <img src={img6} alt="img" />
                  <h3>AUTO PARTS</h3>
                  </div>

                  <div>
                  <img src={img7} alt="img" />
                  <h3>MEDICAL</h3>
                  </div>

                  <div>
                  <img src={img8} alt="img" />
                  <h3>ACCESSORIES</h3>
                  </div>

                  <div>
                  <img src={img9} alt="img" />
                  <h3>SHOES</h3>
                  </div>

                  <div>
                  <img src={img10} alt="img" />
                  <h3>ORGANIC</h3>
                  </div>
                </div>
                </Container>
                
              </div>
            </li>
            <li>
              <NavLink to="/shop">
                <p>SHOP </p> <i className="bx bx-chevron-down"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/element">
                <p>ELEMENTS</p> <i className="bx bx-chevron-down"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages">
                <p>PAGES</p> <i className="bx bx-chevron-down"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/vendor">
                <p>VENDOR</p> <i className="bx bx-chevron-down"></i>
              </NavLink>
            </li>
          </ul>

          <button className="operator-div" onClick={()=>alert("would You Like to Call Someone")}>
            <i className="bx bx-headphone"></i>
            <p>+998(90)1020440</p>
          </button>
        </div>
      </Container>
    </div>
  );
}
