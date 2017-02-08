var controller_section5 = new ScrollMagic.Controller({ vertical: false });

var tweenSection5 = new TimelineMax()
        .add([
            // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
            TweenMax.to(".section_five>.content .section_mainImage>img", 1, { left: '15%' }),
            TweenMax.to(".section_five>.content .section_bcgImage_1", 1, { left: '70%' }),
            TweenMax.to(".section_five>.content .section_title", 1, { left: '50%' }),
            TweenMax.to(".section_five>.content .section_text", 1, { left: '55%' })
        ]);

    // build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_five .content", duration: '100%', offset: 0 })
    .setTween(tweenSection5)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller_section5);