import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar/Navbar.js'
import SlideShow from '../components/SlideShow/SlideShow.js'

function MainPage(){
    return (
        <div>
            <Navbar />
            <SlideShow />
            Main Page
        </div>
    )
}

export default MainPage