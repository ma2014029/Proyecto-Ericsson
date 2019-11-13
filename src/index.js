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

//Refresh webside
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);

}*/
