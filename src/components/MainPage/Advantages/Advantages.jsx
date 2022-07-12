import React from 'react';
import './Advantages.css';
import Container from '../../../Container/Container';
import {GiCommercialAirplane, GiHeadphones} from 'react-icons/gi';
import {GrPowerReset} from 'react-icons/gr';
import {VscDebugRestart} from 'react-icons/vsc';

import {BsGift} from 'react-icons/bs'


export default function Advantages() {
  return (
    <div className='advantages'>
      <Container>
        <div className='advantages_grid'>
          <div className='ad_grid_item'>
            <GiCommercialAirplane />
            <h2>Free Shipping</h2>
            <p>Free Shipping for all US order</p>
          </div>

          <div className='ad_grid_item'>
            <GiHeadphones />
            <h2>Support 24/7</h2>
            <p>We support 24 hours a day</p>
          </div>

          <div className='ad_grid_item'>
            <VscDebugRestart />
            <h2>100% Money Back</h2>
            <p>You have 30 days to return</p>
          </div>

          <div className='ad_grid_item'>
            <BsGift />
            <h2>Payment Secure</h2>
            <p>We ensure secure payment</p>
          </div>
        </div>
      </Container>
      </div>
  )
}
