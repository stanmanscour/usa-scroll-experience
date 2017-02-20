var controller_section3 = new ScrollMagic.Controller({ vertical: false });

var tweenSection3 = new TimelineMax()
.add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_three>.content .section_mainImage>img", 1, { left: '3%', bottom: '-20%' }),
        TweenMax.to(".section_three>.content .section_bcgImage_1", 1, { left: '5%' }),
        TweenMax.to(".section_three>.content .section_title", 1, { left: '47%' }),
        TweenMax.to(".section_three>.content .section_title2", 1, { left: '50%' }),
        TweenMax.to(".section_three>.content .section_text", 1, { left: '45%' })
        ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_three .content", duration: '100%', offset: "-400%" })
    .setTween(tweenSection3)
    .addTo(controller_section3);

  