import React from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';

const CardItems = (props) => {
  return (
    <>
      <li>
          <Link className='flex-1' to={props.path}>
            <img src={props.src} alt=""/>
            <div style={{marginRight:'20%'}}>
                <h5>{props.text}</h5>
                <h6>{props.label}</h6>
            </div>
            <div className='btn'><Button text='Add' /></div>
          </Link>
      </li>
    </>
  )
}

export default CardItems
