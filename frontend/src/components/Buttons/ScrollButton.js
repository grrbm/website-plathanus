import React from "react"
import './Button.scss'
import shape1svg from './Shape 1.svg'

function ScrollButton(){
    return(
        <button id="search-button">
            scroll down
            <img src={shape1svg} alt="Kiwi standing on oval" />
        </button>
    )
}

export default ScrollButton