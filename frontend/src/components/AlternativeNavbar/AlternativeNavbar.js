import React, { useEffect } from "react"
import AlternativeNavbarCss from './AlternativeNavbar.scss'
import $ from "jquery";

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
                <nav class="navbar active navbar-expand-lg fixed-top py-3">
                    <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold">Transparent Nav</a>
                        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                        
                        <div id="navbarSupportedContent" class="collapse navbar-collapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a href="#home" onClick={handleClick} class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                                <li class="nav-item"><a href="#whatwedo" onClick={handleClick} class="nav-link text-uppercase font-weight-bold">What we do?</a></li>
                                <li class="nav-item"><a href="#testimonials" onClick={handleClick} class="nav-link text-uppercase font-weight-bold">Testimonials</a></li>
                                <li class="nav-item"><a href="#contactus" onClick={handleClick} class="nav-link text-uppercase font-weight-bold">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                {/*<!-- Navbar Right -->*/}
                <ul class="navbar-nav ml-auto">
                <form class="form-inline" action="/action_page.php">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                </form>
                </ul>
                </nav>
            </header>
    )
}

export default AlternativeNavbar