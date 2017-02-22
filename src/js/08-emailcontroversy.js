var controller_section6 = new ScrollMagic.Controller({ vertical: false });

var tweenSection6 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_six>.content .section_mainImage>img", 1, { left: '0.2%', bottom: "-15%" }),
        TweenMax.to(".section_six>.content .section_bcgImage_1", 1, { left: '40%' }),
        TweenMax.to(".section_six>.content .section_title", 1, { left: '45%' }),
        TweenMax.to(".section_six>.content .section_text", 1, { left: '53%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_six .content", duration: '100%', offset: 0 })
    .setTween(tweenSection6)
     // add indicators (requires plugin)
    .addTo(controller_section6);

var $email_year = $('.section_six .section_year'),
    $email_action = $('.section_six .section_discover');

$(function() {

    $email_year.homePos = { x: $email_year.css('left').split('px')[0], y: $email_year.css('top').split('px')[0] };
    $email_action.homePos = { x: $email_action.css('left').split('px')[0], y: $email_action.css('top').split('px')[0] };

    $('.section_six').mousemove(function(e) {
        parallax(e, $email_year, 40, 'left', 'top');

        if (parallaxActionAuthorised) {
            parallax(e, $email_action, 60, 'left', 'top');
        }
    })
})