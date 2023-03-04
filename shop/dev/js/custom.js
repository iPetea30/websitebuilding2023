const scrollBtn = document.querySelector(".gototop");
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Get the button:
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

var id;
$("#modalForm").on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); //Button that triggered the modal
    const produs = button.data('name') //need to find the button and get product
    const pret = button.data('price') //need to find the button and get price
    const description = button.data('description');
    $(".modal-header #titleModalLabel").html(produs);
    $(".modal-body #price").html(pret);
    $(".modal-body #description").html(description);
    id = button.attr('id');
    // var datainfo = document.getElementById(id);
    alert(JSON.stringify(button));
    // alert(JSON.stringify(datainfo));


})
$("#modalForm").on('hidden.bs.modal', function (event) {

    // alert('Modalul s-a inchis');
    document.getElementById(id).classList.remove('btn-primary');
    document.getElementById(id).classList.add('btn-info');
})

function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

// // START Cookie
// function setCookie(c_name, value, expiredays) {
//     var exdate = new Date();
//     exdate.setDate(exdate.getDate() + expiredays);
//     document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" :
//         ";expires=" + exdate.toGMTString());
// }
// function getCookie(c_name) {
//     if (document.cookie.length > 0) {
//         c_start = document.cookie.indexOf(c_name + "=");
//         if (c_start != -1) {
//             c_start = c_start + c_name.length + 1;
//             c_end = document.cookie.indexOf(";", c_start);
//             if (c_end == -1) c_end = document.cookie.length;
//             return
//             unescape(document.cookie.substring(c_start, c_end));
//         }
//     }
//     return "";
// }
// function checkCookie() {
//     username = getCookie('username');
//     if (username != null && username != "") {
//         alert('Welcome again ' + username + '!');
//     }
//     else {
//         username = prompt('Please enter your name:', "");
//         if (username != null && username != "") {
//             setCookie('username', username, 365);
//         }
//     }
// }
// // STOP Cookie

// START Cookie 2
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
}

// The following code will check the cookie acceptance flag in JavaScript Cookies when the web page is loaded.

// If already accepted, it will hide the Cookie Consent Popup. Otherwise, the Cookie Consent Popup will be displayed.
let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
}else{
    document.getElementById("cookieNotice").style.display = "block";
}
// STOP Cookie 2
