//Funcion a realizar cuando se hace scroll
window.onscroll = function() {functionScroll()};

var header = document.getElementById("header");

function functionScroll() {
    if (window.pageYOffset >= 60) {
      header.classList.add("header-active")
    } else {
      header.classList.remove("header-active");
    }
    if (window.pageYOffset >= 4900) {
      header.classList.add("header-active2")
    } else {
      header.classList.remove("header-active2");
    }
    if (window.pageYOffset >= 5200) {
      header.classList.add("header-active3")
    } else {
      header.classList.remove("header-active3");
    }
   
  }