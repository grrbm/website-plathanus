import React from "react"
import './ScrollButton.scss'
import shape1svg from './Shape 1.svg'

function ScrollButton(){
    return(
        <button id="scroll-button" className="proxima-reg">
            scroll down
            <img src={shape1svg} alt="Kiwi standing on oval" />
        </button>
    )
}

export default ScrollButton