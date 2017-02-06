$(function() {

/*
*
* Append table
*
*/

$("#container").wrapInner("<table cellspacing='30'><tr>");
$(".section").wrap("<td>");


/*
*
* Responsive
*
*/

var windowWidth,
windowHeight;

var updateWindow = function(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;

	$('td').css('min-width', windowWidth+'px');
	$('td').css('min-height', windowHeight+'px');
	$('td').css('height', windowHeight+'px');

	console.log("nouvelle height = " +windowHeight+"px");
	console.log("nouvelle width = " +windowWidth+"px");
}

updateWindow();

$(window).resize(function(){
	console.log("hey");
	updateWindow();
})

/*
*
* Mouse scroll
*
*/

$("body").mousewheel(function(event, delta) {
	this.scrollLeft -= (delta * 30);
	event.preventDefault();   
});
