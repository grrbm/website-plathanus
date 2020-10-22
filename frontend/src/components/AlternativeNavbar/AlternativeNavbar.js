import React, { useEffect } from "react"
import AlternativeNavbarCss from './AlternativeNavbar.scss'
import $ from "jquery";
import logo from "../../img/logo-plathanus.png"

function AlternativeNavbar(){
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
        const name = ""+e.target;
        $(`a[href|='${'#'+name.split('#')[1]}']`).closest('li').addClass('active').siblings().removeClass('active')
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    return(
        <header class="header">
            <nav class="navbar navbar-expand-sm navbar-brand-center fixed-top">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <a class="navbar-brand mr-auto" href="#">
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

export default AlternativeNavbar