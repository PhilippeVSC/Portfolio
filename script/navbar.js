window.onscroll = function () {
    if (window.scrollY >= 60 || window.pageYOffset >= 60){
        document.getElementsByTagName("header")[0].classList.add("header--scroll");
        document.getElementsByTagName("nav")[0].classList.add("nav--scroll");

        document.getElementsByTagName("header")[0].classList.remove("header--nscroll");
        document.getElementsByTagName("nav")[0].classList.remove("nav--nscroll");        
    } else {
        document.getElementsByTagName("header")[0].classList.add("header-nscroll");
        document.getElementsByTagName("nav")[0].classList.add("nav--nscroll");

        document.getElementsByTagName("header")[0].classList.remove("header--scroll");
        document.getElementsByTagName("nav")[0].classList.remove("nav--scroll");     
    } 
}