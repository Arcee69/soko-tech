import React from 'react';
import { FaCode } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

const Sticky = () => {
  return (
    <>
        <div className='sticky'>
            <button className='btn-s'>Menu</button>
            <button className='btn-s'><FaCode />  Handoff</button>
            <button className='btn-s'><FaComment />  No comments</button>
        </div>
    </>
  )
}

export default Sticky
