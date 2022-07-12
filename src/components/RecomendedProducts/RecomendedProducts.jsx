import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import { FiEye, FiShoppingBag } from 'react-icons/fi'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineRestartAlt } from 'react-icons/md'

export default function RecomendedProducts({ name, img, to_price}) {
  return (
    <div className="fruit_item">
      
      <BsSuitHeart className="absolute_svg" />
      <div className="img_div">
        <div className="img_move">
          <img src={img[0]} alt="img" />
          <img src={img[1]} alt="img" />
        </div>
      </div>

      <div className="move_btns_div">
        <div className="left-btn">
          <MdKeyboardArrowLeft />
        </div>
        <div className="right-btn">
          <MdKeyboardArrowRight />
        </div>
      </div>

      <div className="bottom_btns">
        <div>
          <Tooltip title="Add to Cart">
            <IconButton>
              <FiShoppingBag />
            </IconButton>
          </Tooltip>
        </div>
        <div className="center_btn_div">
        <Tooltip title="Quick View">
            <IconButton>
            <FiEye />
            </IconButton>
          </Tooltip>
          
        </div>
        <div>
        <Tooltip title="Compare">
            <IconButton>
            <MdOutlineRestartAlt />
            </IconButton>
          </Tooltip>
          
        </div>
      </div>

      <div className="fruit_desc">
        <h3>{name}</h3>
        <div className="fruit_desc_flex">
          <p>$ {to_price}</p>

          <div className="fruit_different_prices">
            <div>
              <p>1</p> <p>KG</p>
            </div>
            <div>
              <p>500</p> <p>G</p>
            </div>
            <div>
              <p>250</p> <p>G</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
