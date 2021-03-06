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
// Other
$(document).ready(function() {
	var $videoSrc;  
	$('.func-modal-video').click(function() {
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
function isFacebookApp() {
	var ua = navigator.userAgent || navigator.vendor || window.opera;
	return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}
//document.body.innerHTML = isFacebookApp();
if(isFacebookApp()){
	$(".modal-fb").addClass("is-active");
};
function iOS() {
	return [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	].includes(navigator.platform)
	// iPad on iOS 13 detection
	|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
if(iOS()){
	$(".modal-fb").removeClass("is-active");
};