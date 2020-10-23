import React from "react"
import "./WhatWeDo.scss"
import RegularButton from '../Buttons/RegularButton.js'
import shape1svg from '../../img/Camera.svg'
import shape2svg from '../../img/Odometer.svg'
import shape3svg from '../../img/Suitcase.svg'


function WhatWeDo(props){
    const string1 = 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns'
                        .substring(0,54);
    const string2 = 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns'
                        .substring(0,54);
    const string3 = 'This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns'
                        .substring(0,54);
    return (<div id={props.id} className="WhatWeDo">
                
                <div className="first-part">
                    <h4 className="proxima-light title">WHAT WE DO</h4>
                    <h6 className="proxima-light subtitle">Lorem ipsum sit dolor iamet. Proin gravida nibh vel veli auctor aliquet.</h6>
                    
                </div>
                <div className="second-part">
                    <div className="task"> 
                        <img src={shape1svg} alt="Kiwi standing on oval" />
                        <h3 className="proxima-bold task-title">Lorem Ipsum</h3>
                        <p className="proxima-reg task-description">{string1}</p>
                        <RegularButton/>
                    </div>
                    <div className="task">
                        <img src={shape2svg} alt="Kiwi standing on oval" />
                        <h3 className="proxima-bold task-title">Lorem Ipsum</h3>
                        <p className="proxima-reg task-description">{string2}</p>
                        <RegularButton/>
                    </div>
                    <div className="task">
                        <img src={shape3svg} alt="Kiwi standing on oval" />
                        <h3 className="proxima-bold task-title">Lorem Ipsum</h3>
                        <p className="proxima-reg task-description">{string3}</p>
                        <RegularButton/>
                    </div>
                </div>
                
            </div>)
}

export default WhatWeDo