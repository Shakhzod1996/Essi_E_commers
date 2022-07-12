import Container from "../../Container/Container";
import React from "react";
import "./Header.css";
import en from "../../assets/flags/en.png";
import de from "../../assets/flags/de.png";
import fr from "../../assets/flags/fr.png";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <div className="header_flex">
          <div className="left_header">
            <span>
              <i className="bx bxs-news"></i>
            </span>
            <p>Add anything here or just remove it...</p>
          </div>

          <div className="right_header">
            <div className="language_flex">
              <a  className="lang_a lang_default">
                <img src={en} alt="img" />
                <p>English</p>
              </a>

              <ul className="language_hover">
                <li>
                  <img src={de} alt="img" />
                  <p>Deutsch</p>
                </li>

                <li>
                  <img src={fr} alt="img" />
                  <p>French</p>
                </li>

                <li>Request WPML</li>
              </ul>
            </div>

            <div className="money_type">
              <a href="/">
                <p>US Dollar</p>
              </a>
              <ul className="money_hover">
                <li>
                  
                  <p>Euro(EUR)</p>
                </li>

                <li>
                  <p>Indian Rupee (INR)</p>
                </li>

                <li>
                  <p>Pound (GBP)</p>
                </li>

                <li>Request WPML</li>
              </ul>
            </div>

            <div className="login_div">
              <div>
                <a href="/">
                  <i className="bx bx-user-circle"></i>
                  <p>Login/Register</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
