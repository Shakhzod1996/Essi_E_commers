import React from 'react';
import Container from '../../../Container/Container';
import './Brands.css';
import brand1 from '../../../assets/brand-1.jpg'
import brand2 from '../../../assets/brand-2.jpg'
import brand3 from '../../../assets/brand-3.jpg'
import brand4 from '../../../assets/brand-4.jpg'
import brand5 from '../../../assets/brand-5.jpg'
import brand6 from '../../../assets/brand-6.jpg'


export default function Brands() {
  return (
    <div className='brands'>
      <Container>
        <div className='brands_flex'>
          <img src={brand1} alt="img" />
          <img src={brand2} alt="img" />
          <img src={brand3} alt="img" />
          <img src={brand4} alt="img" />
          <img src={brand5} alt="img" />
          <img src={brand6} alt="img" />

        </div>
      </Container>
    </div>
  )
}
