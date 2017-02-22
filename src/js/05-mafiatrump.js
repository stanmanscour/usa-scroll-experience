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