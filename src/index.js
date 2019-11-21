import $ from 'jquery';
import _ from 'lodash';
import 'bootstrap';
import css from 'css/bootstrap.min.css';
import 'scss/main';
import 'js/menu';
import 'materialize-css/dist/js/materialize.js';
$('.carousel').carousel({interval: 10000});
//Parallax Init
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});
//refresh website
$(document).ready(function(){
	$(this).scrollTop(0);
	
});
//Botonir
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(600);
		} else {
			$('.ir-arriba').slideUp(400);
		}
	});
 
});

// Aos init
AOS.init ({
	})
//loader
$(document).ready(function() {
	setTimeout(function() {
		$(".preloader1").fadeOut(1000);
		$('body').css('overflow-y','scroll');
	},3200);	
});