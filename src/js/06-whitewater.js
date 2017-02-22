var controller_section4 = new ScrollMagic.Controller({ vertical: false });

var tweenSection4 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_four>.content .section_mainImage>img", 1, { left: '2%', bottom: "-20%" }),
        TweenMax.to(".section_four>.content .section_bcgImage_1", 1, { left: '7%' }),
        TweenMax.to(".section_four>.content .section_title", 1, { left: '56%' }),
        TweenMax.to(".section_four>.content .section_text", 1, { left: '54%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_four .content", duration: '100%', offset: 0 })
    .setTween(tweenSection4)
     // add indicators (requires plugin)
    .addTo(controller_section4);

var $ww_year = $('.section_four .section_year'),
    $ww_action = $('.section_four .section_discover');

$(function() {

    $ww_year.homePos = { x: $ww_year.css('left').split('px')[0], y: $ww_year.css('top').split('px')[0] };
    $ww_action.homePos = { x: $ww_action.css('left').split('px')[0], y: $ww_action.css('top').split('px')[0] };

    $('.section_four').mousemove(function(e) {
        parallax(e, $ww_year, 40, 'left', 'top');

        let sectionOpen = $('.section_four').data('open');

        if (!sectionOpen) {
            parallax(e, $ww_action, 60, 'left', 'top');
        }
    })
})