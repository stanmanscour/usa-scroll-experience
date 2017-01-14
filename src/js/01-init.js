// code pour l'initialisation
// # calcul taille fenetre 
// # loading

var windowWidth,
windowHeight;

var updateWindow = function(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	
	var $entranceContainer = $('.usa-entrance-container');

	$entranceContainer.css('width', windowWidth+'px');
	$entranceContainer.css('height', windowHeight+'px');
	
	console.log("nouvelle height = " +windowHeight+"px");
	console.log("nouvelle width = " +windowWidth+"px");
}


$(document).ready(function(){
	updateWindow();
	
	$(window).resize(function(){
		updateWindow();
	})
})
