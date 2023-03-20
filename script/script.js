/** Navbar **/

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
    };
};

/** Modal CV window **/

let openModal = document.getElementsByClassName("CV_button")[0];
let closeModal = document.getElementsByClassName("modal_close_button_img")[0];
let modal = document.getElementsByClassName("modal_CV")[0];

openModal.onclick = () => {
    modal.style.display = 'block';
}

closeModal.onclick = () => {
    modal.style.display = 'none';
}