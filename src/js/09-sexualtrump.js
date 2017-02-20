// var timelineGlobalAnim;

//////////

var controller_section7 = new ScrollMagic.Controller({ vertical: false });

var tweenSection7 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_seven>.content .section_mainImage>img", 1, { left: '3%', bottom: '0%' }),
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
