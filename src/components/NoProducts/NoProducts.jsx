import React from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Container from "../../Container/Container";
import "./NoProducts.css";
import img from '../../assets/not-found-icon.jpg'

export default function NoProducts() {
  return (
    <div className="no_products">
      <Container>
        <div className="filter_fruits">
          <div className="left_filter_div">
            <h4>Filter by: </h4>
            <h4 className="first-h4">
              <CgNotes /> Categories
            </h4>
            <h4>
              Price <MdKeyboardArrowDown />
            </h4>
            <h4>
              Status <MdKeyboardArrowDown />
            </h4>
            <p>11 results</p>
          </div>

          <div className="right_sort_div">
            <p>
              Sort By{" "}
              <span>
                Latest <MdKeyboardArrowDown />
              </span>
            </p>

            <div className="short_icons">
              <BsFillGrid3X3GapFill className="active" />
              <GiHamburgerMenu />
            </div>
          </div>
        </div>

        
      </Container>

      <div className="no_pr_show">
          <img src={img} alt="img" />
        <h2>No products were found matching your selection.</h2> 
        </div>
    </div>
  );
}
