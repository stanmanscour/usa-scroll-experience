var controller_section3 = new ScrollMagic.Controller({ vertical: false });

var tweenSection3 = new TimelineMax()
.add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_three>.content .section_mainImage>img", 1, { left: '3%', bottom: '-25%' }),
        TweenMax.to(".section_three>.content .section_bcgImage_1", 1, { left: '15%' }),
        TweenMax.to(".section_three>.content .section_title", 1, { left: '47%' }),
        TweenMax.to(".section_three>.content .section_title2", 1, { left: '50%' }),
        TweenMax.to(".section_three>.content .section_text", 1, { left: '45%' })
        ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_three .content", duration: '100%', offset: "-400%" })
.setTween(tweenSection3)
.addTo(controller_section3);

// /// Anim 2nd content
// 	var controller_content2Section3 = new ScrollMagic.Controller();

// 	//Section1
//     var AnimSection3_Content1 = TweenMax.fromTo(".section_three .section_contentSecond .section1_content", 1, { opacity: 0}, {opacity: 1})
             
//     var sceneOpacity_secondContent1 = new ScrollMagic.Scene({
//       triggerElement: ".section_three .container_secondBox",
//       triggerHook: 0.5,
//       offset: 250
//     })
//     .setTween(AnimSection3_Content1)
//     .addIndicators()
//     .addTo(controller_content2Section3);

	//Section2
	// var AnimSection3_Content2 = TweenMax.to(".section2_content", 1, { opacity: 1, left: "15%"})
             
    // var sceneOpacity_secondContent2 = new ScrollMagic.Scene({
    //   triggerElement: ".section_three .container_secondBox",
    //   triggerHook: 0.5,
    //   offset: 500
    // })
    // .setTween(AnimSection3_Content2)
    // .addIndicators()
    // .addTo(controller_content2Section3);

	// //IMG GIF
	// var AnimSection3_ContentGif = TweenMax.to(".section2_img", 1, { opacity: 1})
             
    // var sceneOpacity_secondContentGif = new ScrollMagic.Scene({
    //   triggerElement: ".section_three .container_secondBox",
    //   triggerHook: 0.5,
    //   offset: 600
    // })
    // .setTween(AnimSection3_ContentGif)
    // .addIndicators()
    // .addTo(controller_content2Section3);

	// //Section3
	// var AnimSection3_Content3 = TweenMax.to(".section3_content", 1, { opacity: 1, left: "15%"})
             
    // var sceneOpacity_secondContent3 = new ScrollMagic.Scene({
    //   triggerElement: ".section_three .container_secondBox",
    //   triggerHook: 0.5,
    //   offset: 800
    // })
    // .setTween(AnimSection3_Content3)
    // .addIndicators()
    // .addTo(controller_content2Section3);

	// //Section4
	// var AnimSection3_Content4 = TweenMax.to(".section4_content", 1, { opacity: 1, left: "55%"})
             
    // var sceneOpacity_secondContent4 = new ScrollMagic.Scene({
    //   triggerElement: ".section_three .container_secondBox",
    //   triggerHook: 0.5,
    //   offset: 1000
    // })
    // .setTween(AnimSection3_Content4)
    // .addIndicators()
    // .addTo(controller_content2Section3);


var $mafia_year = $('.section_three .section_year'),
	$mafia_action = $('.section_three .section_discover');

$(function() {
	
	$mafia_year.homePos = { x: $mafia_year.css('left').split('px')[0], y: $mafia_year.css('top').split('px')[0] };
	$mafia_action.homePos = { x: $mafia_action.css('left').split('px')[0], y: $mafia_action.css('top').split('px')[0] };

	$('.section_three').mousemove(function(e) {

		parallax(e, $mafia_year, 40, 'left', 'top');

		let sectionOpen = $('.section_three').data('open');

		if (!sectionOpen) {
			parallax(e, $mafia_action, 60, 'left', 'top');
		}
	})
})