/** Navbar **/
window.onscroll = function () {
    /** Show the Header **/
    if (window.scrollY >= 60 || window.pageYOffset >= 60){
        document.getElementsByTagName("header")[0].classList.add("header--scroll");
        document.getElementsByTagName("nav")[0].classList.add("nav--scroll");

        document.getElementsByTagName("header")[0].classList.remove("header--nscroll");
        document.getElementsByTagName("nav")[0].classList.remove("nav--nscroll");        
    } else {
    /** Hide the Header on #Home **/
        document.getElementsByTagName("header")[0].classList.add("header-nscroll");
        document.getElementsByTagName("nav")[0].classList.add("nav--nscroll");

        document.getElementsByTagName("header")[0].classList.remove("header--scroll");
        document.getElementsByTagName("nav")[0].classList.remove("nav--scroll");     
    };
};

/** Modal CV window **/
let openModal = document.getElementsByClassName("CV_button")[0]; /** Opening Button **/
let closeModal = document.getElementsByClassName("modal_close_button_img")[0]; /** Closing Button **/
let modal = document.getElementsByClassName("modal_CV")[0]; /** Modal Div **/

/** Opening button on click display the modal div */
openModal.onclick = () => {
    modal.style.display = 'block';
}

/** Closing button on click hide the modal div */
closeModal.onclick = () => {
    modal.style.display = 'none';
}

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(modal);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    
    modal.style.left = `${left + movementX}px`;
    modal.style.top = `${top + movementY}px`;
}

modal.addEventListener("mousedown", () => {
    modal.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    modal.removeEventListener("mousemove", onDrag);
})