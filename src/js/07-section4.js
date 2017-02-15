var controller_section4 = new ScrollMagic.Controller({ vertical: false });

var tweenSection4 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_four>.content .section_mainImage>img", 1, { left: '2%', bottom: "-10%" }),
        TweenMax.to(".section_four>.content .section_bcgImage_1", 1, { left: '70%' }),
        TweenMax.to(".section_four>.content .section_title", 1, { left: '56%' }),
        TweenMax.to(".section_four>.content .section_text", 1, { left: '54%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_four .content", duration: '100%', offset: 0 })
    .setTween(tweenSection4)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller_section4);