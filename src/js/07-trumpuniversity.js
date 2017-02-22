var controller_section5 = new ScrollMagic.Controller({ vertical: false });

var tweenSection5 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_five>.content .section_mainImage>img", 1, { left: '5%', bottom: '-25%' }),
        TweenMax.to(".section_five>.content .section_bcgImage_1", 1, { left: '5%' }),
        TweenMax.to(".section_five>.content .section_title", 1, { left: '50%' }),
        TweenMax.to(".section_five>.content .section_title2", 1, { left: '51%' }),
        TweenMax.to(".section_five>.content .section_text", 1, { left: '55%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_five .content", duration: '100%', offset: 0 })
    .setTween(tweenSection5)
     // add indicators (requires plugin)
    .addTo(controller_section5);

var $university_year = $('.section_five .section_year'),
    $university_action = $('.section_five .section_discover');


$(function() {

    $university_year.homePos = { x: $university_year.css('left').split('px')[0], y: $university_year.css('top').split('px')[0] };
    $university_action.homePos = { x: $university_action.css('left').split('px')[0], y: $university_action.css('top').split('px')[0] };

    $('.section_five').mousemove(function(e) {
        parallax(e, $university_year, 40, 'left', 'top');

        if (parallaxActionAuthorised) {
            parallax(e, $university_action, 60, 'left', 'top');
        }
    })
})