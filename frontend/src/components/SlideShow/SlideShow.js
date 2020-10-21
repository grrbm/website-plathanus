import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.scss";

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];

export default function App() {
  const [data,setData] = useState(<Fade>        
    <div className="each-fade">
        <img src={fadeImages[0]} />
    </div>
    <div className="each-fade">
        <img src={fadeImages[1]} />
    </div>
    <div className="each-fade">
        <img src={fadeImages[2]} />
    </div>
  </Fade>);
  
  useEffect(()=>{
    async function fetchSlides(){
        const allSlides = await axios({
            method: 'get',
            url: `/slides`
        });        
        if (allSlides.data)
        {
            let slidesJSX = allSlides.data.map(element => { 
                return(
                    <div className="each-fade">
                        <img style={{height:'900px'}} src={`data:image/jpeg;base64,${element}`}/>
                    </div>)
            });
            setData(<Fade>{slidesJSX}</Fade>);
        }
    } 
    fetchSlides();
  },[])
  return (
    <div id="home" className="slide-container">
      {data}
    </div>
  );
}