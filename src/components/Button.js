import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Button = (props) => {
  return (
    <>
      <div style={{marginTop:'3px'}}>
        <FaPlus style={{marginTop:'2px'}} /> {props.text}
      </div>
    </>
  )
}

export default Button
