import React, { useEffect } from "react"
import NavbarCss from './Navbar.scss'
import $ from "jquery";
import logo from "../../img/logo-plathanus.png"

function Navbar(){
    function scrollToFunction(anchor){
        anchor = anchor.substring(1);
        var elementToScrollTo = document.getElementById(anchor);
        console.log(anchor);
        elementToScrollTo.scrollIntoView(true);
        //document.getElementById("root").scrollTop -= 10;
    }
    function handleScroll(){
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
        console.log("handling scroll");
    }
    function handleClick(e){
        console.log("handling click");
        e.preventDefault();
        $(`a[href|='${e.target.getAttribute('href')}']`).closest('li').addClass('active').siblings().removeClass('active')
        scrollToFunction(e.target.getAttribute('href'));        
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    return(
        <header class="header">
            <nav class="navbar navbar-expand-custom navbar-brand-center fixed-top py-3">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link text-nowrap" onClick={handleClick} href="#home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-nowrap" onClick={handleClick} href="#whatwedo">What we do?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-nowrap disabled" onClick={handleClick} href="#testimonials">Testimonial</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-nowrap disabled" onClick={handleClick} href="#contactus">Contact Us</a>
                    </li>
                    </ul>
                    <a class="navbar-brand mx-auto" href="#">
                        <img src={logo} alt=""/>
                    </a>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar