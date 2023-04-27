import { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
  'https://i.imgur.com/d4GXLgnb.jpg',
];

function Slider() {



  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((image) => (
            <div className='slide'>
          <img key={image} src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
