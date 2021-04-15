import React from 'react';
import { FaTruck } from "react-icons/fa";
import { FaAward } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const FooterB = () => {
  return (
    <>
      <div className='footer-b'>
        <div className='center-B' ><FaTruck className='icon-B'/> <h4>Fast Delivery</h4></div>
        <div className='center-B'><FaAward className='icon-B' /> <h4>Buyer Protection</h4></div>
        <div className='center-B'><FaPhone className='icon-B' /> <h4>Customer Support</h4></div>
      </div>  
    </>
  )
}

export default FooterB
