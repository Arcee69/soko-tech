import React from 'react'
import { FaFrown } from 'react-icons/fa'

const Bag = (props) => {
  return (
    <>
        <div>
            <div className='dis'><h3>Bag </h3><div className='box-2'>0</div></div>
            <div className='d-bag'><FaFrown className='frown'/></div>
            <div className='text-B'>
                <h3>It's empty here </h3>
                <p>Start shopping to add items to <br /> your bags</p>
            </div>
        </div> 
    </>
  )
}

export default Bag
