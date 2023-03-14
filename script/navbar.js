window.onscroll = function () {
    if (window.scrollY >= 60 || window.pageYOffset >= 60){
        document.getElementsByTagName("header")[0].classList.add("inverted");
        console.log('+')
    } else {
        document.getElementsByTagName("header")[0].classList.remove("inverted");
        console.log('-')
    } 
}