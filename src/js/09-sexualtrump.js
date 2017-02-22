// var timelineGlobalAnim;

//////////

var controller_section7 = new ScrollMagic.Controller({ vertical: false });

var tweenSection7 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_seven>.content .section_mainImage>img", 1, { left: '3%', bottom: '-5%' }),
        TweenMax.to(".section_seven>.content .section_bcgImage_1", 1, { left: '10%' }),
        TweenMax.to(".section_seven>.content .section_title", 1, { left: '54%' }),
        TweenMax.to(".section_seven>.content .section_title2", 1, { left: '60%' }),
        TweenMax.to(".section_seven>.content .section_text", 1, { left: '55%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_seven .content", duration: '100%', offset: 0 })
    .setTween(tweenSection7)
     // add indicators (requires plugin)
    .addTo(controller_section7);

var $sexual_year = $('.section_seven .section_year'),
    $sexual_action = $('.section_seven .section_discover');

$(function() {

    $sexual_year.homePos = { x: $sexual_year.css('left').split('px')[0], y: $sexual_year.css('top').split('px')[0] };
    $sexual_action.homePos = { x: $sexual_action.css('left').split('px')[0], y: $sexual_action.css('top').split('px')[0] };

    $('.section_seven').mousemove(function(e) {
        parallax(e, $sexual_year, 40, 'left', 'top');

        let sectionOpen = $('.section_seven').data('open');

        if (!sectionOpen) {
            parallax(e, $sexual_action, 60, 'left', 'top');
        }
    })
})