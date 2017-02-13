var controller_section6 = new ScrollMagic.Controller({ vertical: false });

var tweenSection6 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_six>.content .section_mainImage>img", 1, { left: '10%', bottom: "10%;" }),
        TweenMax.to(".section_six>.content .section_bcgImage_1", 1, { left: '70%' }),
        TweenMax.to(".section_six>.content .section_title", 1, { left: '50%' }),
        TweenMax.to(".section_six>.content .section_text", 1, { left: '70%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_six .content", duration: '100%', offset: 0 })
    .setTween(tweenSection6)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller_section6);