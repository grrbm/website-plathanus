import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar.js'
import SlideShow from '../components/SlideShow/SlideShow.js'
import SlideShow2 from '../components/SlideShow2/SlideShow2.js'

function MainPage(){
    return (
        <div>
            <Navbar />
            <SlideShow2 />
            Main Page
        </div>
    )
}

export default MainPage