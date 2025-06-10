import React,{ useEffect } from 'react'
import HomeContactUs from '../HomeContactUs/HomeContactUs'

const ContactUs = () => {
  
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <HomeContactUs/>
    </div>
  )
}

export default ContactUs
