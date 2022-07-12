import React from "react";
import "./NavTop.css";
import Container from "../../Container/Container";
import logo from "../../assets/organic-logo.png";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavTop({
  setBrowsShow,
  fruitArr,
  setCartOpen,
  setSavedOpen,
  savedArr,
  setCompareOpen
}) {
  return (
    <div className="nav_top">
      <Container>
        <div className="nav_top_flex">
          <NavLink to="/">
            <img src={logo} onClick={() => setBrowsShow(true)} alt="logo" />
          </NavLink>

          <div className="search-div">
            <input type="search" placeholder="I am shopping for ..." />
            <button>
              SEARCH <i className="bx bx-search"></i>
            </button>
          </div>

          <ul className="wish_list_ul">
            <Tooltip title="Card">
              <IconButton onClick={() => setCartOpen(true)}>
                <Badge
                  className="bg"
                  badgeContent={fruitArr.length}
                  color="secondary"
                >
                  <li>
                    <i className="bx bxs-shopping-bag-alt" />
                  </li>
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="WishList">
              <IconButton onClick={() => setSavedOpen(true)}>
                <Badge
                  className="bg"
                  badgeContent={savedArr.length}
                  color="primary"
                >
                  <li>
                    <i className="bx bx-heart" />
                  </li>
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Compare">
              <IconButton onClick={()=> setCompareOpen(true)}>
                <li>
                  <i className="bx bx-refresh" />
                </li>
              </IconButton>
            </Tooltip>
          </ul>
        </div>
      </Container>
    </div>
  );
}
