/*
*MENU CHRONOLOGIE
*
*/

var controllerMenu = new ScrollMagic.Controller({ vertical: false, globalSceneOptions: {duration: '100%'}});

	// var tweenShow = TweenMax.to(".menu_chronologie", 0.5, { display: 'block'});
	// var tweenHide = TweenMax.to(".menu_chronologie", 0.5, { display: 'none'});
	
	new ScrollMagic.Scene({triggerElement: ".section_two"})
					.setClassToggle(".nav_section1 a", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controllerMenu);

	new ScrollMagic.Scene({triggerElement: ".section_three"})
					.setClassToggle(".nav_section2 a", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controllerMenu);

	new ScrollMagic.Scene({triggerElement: ".section_four"})
					.setClassToggle(".nav_section3 a", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controllerMenu);

	new ScrollMagic.Scene({triggerElement: ".section_five"})
					.setClassToggle(".nav_section4 a", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controllerMenu);

	new ScrollMagic.Scene({triggerElement: ".section_six"})
					.setClassToggle(".nav_section5 a", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controllerMenu);

	new ScrollMagic.Scene({triggerElement: ".section_seven"})
					.setClassToggle(".nav_section6 a", "active") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controllerMenu);



					