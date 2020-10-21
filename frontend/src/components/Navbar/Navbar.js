import React from "react"
import NavbarCss from "./Navbar.scss"

function Navbar() {
    const scrollToFunction = (event) => {
        var elementToScrollTo = document.querySelector(event.target.getAttribute('href'))
        console.log(event.target.getAttribute('href'));
        elementToScrollTo.scrollIntoView(true);
    }
    //flex: 0 1 auto;
    /* The above is shorthand for:
    flex-grow: 0,
    flex-shrink: 1,
    flex-basis: auto
    */
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <a href="/" id="signatureParent" style={{flex: '0 1 200px'}}>
                <p style={{display: 'inline'}}>&#60; </p>
                <p style={{display: 'inline'}} id="signature">Guilherme Reis</p>
                <p style={{display: 'inline'}}> /&#62;</p>
            </a>
            <ul style={{flex: '1 0 400px'}} id="menu">
                <li><a onClick={scrollToFunction} href="#home">Home</a></li>
                <li><a onClick={scrollToFunction} href="#whatwedo">What we do ?</a></li>
                <li><a onClick={scrollToFunction} href="#testimonials">Testimonials</a></li>
                <li><a onClick={scrollToFunction} href="#contactus">Contact Us</a></li>
            </ul>
        </div>
    )
}

export default Navbar