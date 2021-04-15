import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const FooterW = () => {
  return (
    <>
      <div className='footer-w'>
          <p style={{fontSize:'12px'}}>STORE DETAILS</p>
          <p style={{fontWeight: 'bolder', fontSize:'20px'}}>Target</p>
          <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</p>
          <button className='btn-w'><FaWhatsapp/> Chat with us</button>
      </div>
    </>
  )
}

export default FooterW
