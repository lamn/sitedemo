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
		e.preventDefault();
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('is-active');
	}
	bindAll();
}
var connectTabs = new Tabs();
// Other
$(".func-search").click(function(){
	$(this).addClass("is-hidden");
	$(".func-close-search").removeClass("is-hidden");
	$(".navbar-search").removeClass("is-hidden");
	$("#input-search").focus();
});
$(".func-close-search").click(function(){
	$(this).addClass("is-hidden");
	$(".func-search").removeClass("is-hidden");
	$(".navbar-search").addClass("is-hidden");
});
$(".func-modal-register").click(function(){
	$(".modal").addClass("is-active");
});
$(".func-close-modal").click(function(){
	$(".modal").removeClass("is-active");
});