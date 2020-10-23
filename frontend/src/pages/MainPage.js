import React, { useState } from 'react'
import axios from 'axios'
//import Navbar from '../components/Navbar/Navbar.js'
import Navbar from '../components/Navbar/Navbar.js'
import SlideShow from '../components/SlideShow/SlideShow.js'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo.js'

function MainPage(){
    return (
        <div>
            <Navbar />
            <SlideShow id="home" />
            <WhatWeDo id="whatwedo" />
        </div>
    )
}

export default MainPage