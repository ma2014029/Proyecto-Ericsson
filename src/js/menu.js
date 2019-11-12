//Funcion a realizar cuando se hace scroll
window.onscroll = function() {functionScroll()};

var header = document.getElementById("header");

function functionScroll() {
    if (window.pageYOffset >= 60) {
      header.classList.add("header-active")
    } else {
      header.classList.remove("header-active");
    }
   
  }