$(function () { // wait for document ready
    // build tween
    var controller_section2 = new ScrollMagic.Controller({vertical: false});

    var tween = new TimelineMax ()
      .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section-two>.container .section_mainImage>img", 1, {left: '20%'}),
        TweenMax.to(".section-two>.container .section_bcgImage_1", 1, {left: '70%'}),
        TweenMax.to(".section-two>.container .section_title", 1, {left: '55%'}),
        TweenMax.to(".section-two>.container .section_text", 1, {left: '55%'})
      ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".section-two", duration: $('.section-two').width()})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller_section2);



  });