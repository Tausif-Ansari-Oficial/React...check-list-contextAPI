import React from 'react';
import Bgmi from './Image/BGMI.png'
import '../../Project/style.css'

export default function BGMI() {
  return (
    <div>
{/* This is only image container (nothig more) */}
      <img src={Bgmi} alt="bgmi.png" className='logo'/>
    </div>
  );
}
