import React, { useState } from 'react'
import axios from 'axios'
//import Navbar from '../components/Navbar/Navbar.js'
import Navbar from '../components/Navbar/Navbar.js'
import SlideShow from '../components/SlideShow/SlideShow.js'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo.js'
import Testimonials from '../components/Testimonials/Testimonials.js'
import ContactUs from '../components/ContactUs/ContactUs.js'

function MainPage(){
    return (
        <div>
            <Navbar />
            <SlideShow />
            <WhatWeDo />
            <Testimonials />
            <ContactUs />
        </div>
    )
}

export default MainPage