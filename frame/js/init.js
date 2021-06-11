// Slidebar menu
document.addEventListener('DOMContentLoaded', () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
		el.addEventListener('click', () => {
			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);
			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		});
		});
	}
});
// Tabs
'use strict';
function Tabs() {
	var bindAll = function() {
		var menuElements = document.querySelectorAll('[data-tab]');
		for(var i = 0; i < menuElements.length ; i++) {
		menuElements[i].addEventListener('click', change, false);
		}
	}
	var clear = function() {
		var menuElements = document.querySelectorAll('[data-tab]');
		for(var i = 0; i < menuElements.length ; i++) {
		menuElements[i].classList.remove('is-active');
		var id = menuElements[i].getAttribute('data-tab');
		document.getElementById(id).classList.remove('is-active');
		}
	}
	var change = function(e) {
		clear();
		e.target.classList.add('is-active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('is-active');
		e.preventDefault();
	}
	bindAll();
}
var connectTabs = new Tabs();
// Other
$(document).ready(function() {

	var $videoSrc;  
	$('.video-btn').click(function() {
		$videoSrc = $(this).data( "src" );
	});

	$(".func-modal-edit").click(function(){
		$(".modal-edit").addClass("is-active");
	});
	$(".func-modal-cart").click(function(){
		$(".modal-cart").addClass("is-active");
	});
	$(".func-modal-video").click(function(){
		$(".modal-video").addClass("is-active");
		$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	});
	$(".func-close-modal").click(function(){
		$(".modal").removeClass("is-active");
		$("#video").attr('src',$videoSrc); 
	});
});