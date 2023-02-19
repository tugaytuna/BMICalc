import React from 'react'

// import styled from 'styled-components'
// import Button from '@mui/material/Button';
import "./style.css" 


function Header() {

  const scrollEvent = () => {
    
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
  });
  }

  return (
    <div>
        <nav>
          <h1 className='headerBMI'>BMI Calculation</h1>
            {/* <button  className='navBtn'>BMI</button> */}
            <button onClick={scrollEvent} className='navBtn'>What's BMI</button>
            {/* <button className='navBtn'>About Us</button> */}
        </nav>
    
    </div>
  )
}

export default Header
