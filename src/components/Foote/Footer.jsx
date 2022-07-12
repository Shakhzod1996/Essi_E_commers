import { Container } from "@mui/system";
import React from "react";
import "./Footer.css";
import logo from "../../assets/organic-logo.png";
import paymentIcon from "../../assets/home-imgs/payment-icons.png";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="foot_grid">
          <div className="foot_grid_item">
            <div>
              <img src={logo} alt="img" />
            </div>
            <ul>
              <li>
                <a href="/">Calista Wise 7292 Dictum Av.</a>
              </li>
              <li>
                <a href="/">Antonio, Italy..</a>
              </li>
              <li>
                <a href="/">(+01)-800-3456-88</a>
              </li>
              <li>
                <a href="/">nasathemes@gmail.com</a>
              </li>
              <li>
                <a href="/">elessi.nasatheme.com</a>
              </li>
            </ul>
          </div>

          <div className="foot_grid_item">
            <div className="links_flex">
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-facebook"></i>
              <i className="bx bx-envelope"></i>
              <i className="bx bxl-instagram"></i>
            </div>
            <ul>
              <li>
                <a href="/">Delivery Information</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Condition</a>
              </li>
              <li>
                <a href="/">Search Terms</a>
              </li>
              <li>
                <a href="/">Order & Return</a>
              </li>
            </ul>
          </div>

          <div className="foot_grid_item">
            <div>
              <h2>Newsletter</h2>
            </div>
            <ul>
              <li>
                <a href="/">Customer Service</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Condition</a>
              </li>
              <li>
                <a href="/">Best Seller</a>
              </li>
              <li>
                <a href="/">Manufactures</a>
              </li>
            </ul>
          </div>

          <div className="foot_grid_item">
            <div>
              <input type="text" placeholder="enter your email here" />
              <button>SUBSCRIBE</button>
            </div>
            <ul>
              <li className="last_li">
                <a href="/">
                  <p>Monday - Friday</p>
                  <p>08:00 - 20:00</p>
                </a>
              </li>
              <li className="last_li">
                <a href="/">
                  <p>Saturday</p>
                  <p>09:00 - 21:00</p>
                </a>
              </li>
              <li className="last_li">
                <a href="/">
                  <p>Sunday</p>
                  <p>13:00 - 22:00</p>
                </a>
              </li>
            </ul>

            <img className="cards_img" src={paymentIcon} alt="img" />
          </div>
        </div>
      </Container>

      <div className="bottom_footer">
        <Container>
          <div className="bot_foot_flex">
          <p>© 2022 Nasatheme - All Right reserved!</p>
          <ul>
            <li>
              <a href="/">Privacy & Cookies</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Accessibility</a>
            </li>
            <li>
              <a href="/">Store Directory </a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          </div>
          
        </Container>
      </div>
    </div>
  );
}
