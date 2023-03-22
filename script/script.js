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

// Contact Send Mail

function sendMail() {
    let Alert = document.getElementById("alert");

    var params = {
        from_name : (document.getElementById("Surname").value + " " + document.getElementById("Name").value),
        email_id : document.getElementById("Email").value,
        message : document.getElementById("Message").value
    }
    emailjs.send("service_crf037n", "template_0jw75na", params)
        .then(function(response) {
            Alert.style.color = "#b2ffa9";
            Alert.innerHTML = "Message envoyé !"
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            Alert.style.color = "#ff3636";
            Alert.innerHTML = "Erreur";
            console.log('FAILED...', error);
    });
}

function showDescription(num) {
    let project_box = document.getElementsByClassName("project_box")[num];
    let description_box = document.getElementsByClassName("description_box")[num];

    if(project_box.classList.contains("mobileactive")) {
        project_box.classList.remove("mobileactive");
        description_box.classList.remove("mobileactive");
    } else {
        project_box.classList.add("mobileactive");
        description_box.classList.add("mobileactive");
    }
}

const mobile_menu_button = document.getElementById("mobile_menu_button");
const mobile_menu = document.getElementsByClassName("mobile_menu")[0];

mobile_menu_button.addEventListener("click", function() {
    if(mobile_menu.classList.contains("active")) {
        mobile_menu.classList.remove("active");
    } else {
        mobile_menu.classList.add("active");
    }
});