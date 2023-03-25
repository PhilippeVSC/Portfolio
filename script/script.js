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

/** Move Modal CV window Function */
function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(modal);
    let left = parseInt(getStyle.left); /** Get left position */
    let top = parseInt(getStyle.top); /** Get Top position */
    
    if(window.innerWidth > 1100){ /** If Computer Screen Size */
    modal.style.left = `${left + movementX}px`; /** Change Modal Window left Position */
    modal.style.top = `${top + movementY}px`; /** Change Modal Window Right Position */
    }
}

/** When Modal Window clicked -> Window Follow Cursor */
modal.addEventListener("mousedown", () => {
    modal.addEventListener("mousemove", onDrag);
});

/** When Modal Window not clicked -> Window doesnt follow Cursor */
document.addEventListener("mouseup", () => {
    modal.removeEventListener("mousemove", onDrag);
})

// Contact Send Mail
function sendMail() {
    let alert = document.getElementById("alert"); /** Message Sending Info Text Container */

    let Surname = document.getElementById("Surname").value;
    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let Message = document.getElementById("Message").value;

    /** Check if inputs arent empty */
    if(Surname !== "" && Name !=="" && Email !=="" && Message !== ""){
        /** Check if email contain @ **/
        if(Email.includes('@')) {
            /** User Info **/
            var params = {
                from_name : Name + ' ' + Surname,
                email_id : Email,
                message : Message
            }

            /** Send Mail **/
            emailjs.send("service_crf037n", "template_0jw75na", params) /** 'service_crf037n' = Account to send / 'template_0jw75na' = Mail Template */
                .then(function(response) { /** If Message Sent  **/
                    alert.style.color = "#b2ffa9";
                    alert.innerHTML = "Message envoyé !"
                }, function(error) { /** If error  **/
                    alert.style.color = "#ff3636";
                    alert.innerHTML = "Erreur";
            });
        } else {
            /** If Email doesnt contain @ */
            alert.style.color = "#ff3636";
            alert.innerHTML = "Adresse E-mail invalide";
        }
    } else {
        /** If input is Empty */
        alert.style.color = "#ff3636";
        alert.innerHTML = "Veuillez renseigner tout les champs";
    }
}

/** Mobile Project Info Button Show/Hide */
function showDescription(num) {
    let project_box = document.getElementsByClassName("project_box")[num];
    let description_box = document.getElementsByClassName("description_box")[num];

    /** If Project Contain Class 'mobileactive' -> Show Project Title & Description */
    if(project_box.classList.contains("mobileactive")) {
        project_box.classList.remove("mobileactive");
        description_box.classList.remove("mobileactive");
    } else {
        project_box.classList.add("mobileactive");
        description_box.classList.add("mobileactive");
    }
}

/** Mobile Nav Menu */
const mobile_menu_button = document.getElementById("mobile_menu_button");
const mobile_menu = document.getElementsByClassName("mobile_menu")[0];

/** Open & Close Nav Menu */
mobile_menu_button.addEventListener("click", function() {
    if(mobile_menu.classList.contains("active")) {
        mobile_menu.classList.remove("active");
    } else {
        mobile_menu.classList.add("active");
    }
});