import React from 'react';
import { FaHome, FaShoppingBag, FaAddressBook } from 'react-icons/fa'; 

const Target = () => {
  return (
    <div>
      <div className='row'>
          <div className='size'> 
            <FaHome className='home' /> 
            <div className='m'>
              <div className='bold'> Target</div>
              <div> Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</div>
            </div>
          </div>
          <div className='bag-size'>
            <FaShoppingBag className='bag' />
            <div className='b'>
              <div> Bag</div>
            </div>
          </div>
          <div className='bag-size'>
            <FaAddressBook className='bag' />
            <div className='b'>
              <div> Account</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Target;
