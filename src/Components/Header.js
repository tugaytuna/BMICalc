import React from 'react'

// import styled from 'styled-components'
// import Button from '@mui/material/Button';
import "./style.css" 


function Header() {

  const scrollEvent = () => {
    console.log("outside")
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
  });
  }

  return (
    <div>
        <nav>
            <button  className='navBtn'>BMI</button>
            <button onClick={scrollEvent} className='navBtn'>What's BMI</button>
            {/* <button className='navBtn'>About Us</button> */}
        </nav>
    
    </div>
  )
}

export default Header
