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

// code pour l'entrée de l'experience
function PageLoaded(jQuery){
	fond = $('.usa-entrance-bcgTexture');
	trump = $('.usa-entrance-candidatTrump');
	clinton = $('.usa-entrance-candidatClinton');
	foule = $('.usa-entrance-bcgFoule');
	descript = $('.usa-entrance-descript');
	flag = $('.usa-entrance-bcgTexture-flag');

	fond.animate({
		opacity: 1
	}, 500, function() {
		trump.delay(500).animate({
			bottom: '-30%'
		}, 1000);
		clinton.delay(500).animate({
			bottom: '-37%'
		}, 1000);
		descript.delay(1500).animate({
			opacity: 1
		}, 1000);
		foule.delay(1000).animate({
			opacity: 1
		}, 500);
		flag.delay(1500).animate({
			opacity: 1
		}, 1500);
	});


};

$(window).load(PageLoaded);