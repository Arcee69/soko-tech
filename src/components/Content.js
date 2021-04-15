import React from 'react';
import CardItems from './CardItems';

const Content = () => {
  return (
    <>
      <div>
        <div className='dis'><h3>Electronics </h3><div className='box'> 12</div></div>
        <ul>
          <CardItems 
            src='images/camera.jpg'
            text='High Resolution Photography Camera'
            label='UGX 185,000'
            path='/electronics'
          />
        </ul>
        <ul>
          <CardItems 
            src='images/drone-1.jpg'
            text='Ballistic Drone For Military Operations'
            label='UGX 118,400'
            path='/electronics'
          />
        </ul>
        <ul>
          <CardItems 
            src='images/drone-2.jpg'
            text='High Resolution Drone For Surveillance'
            label='UGX 104,000'
            path='/electronics'
          />
        </ul>
        <ul>
          <CardItems 
            src='images/macbook.jpg'
            text='Affordable Personal Computer For Home'
            label='UGX 100,000'
            path='/electronics'
          />
        </ul>
        <ul>
          <CardItems 
            src='images/iphone.jpg'
            text='Super Powerful Iphone X Smartphone'
            label='UGX 100,000'
            path='/electronics'
          />
        </ul>
      </div>
    </>
  )
}

export default Content
