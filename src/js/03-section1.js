$(function () { // wait for document ready
    var controller_section2 = new ScrollMagic.Controller({vertical: false});

    var section2Taille = $('.section-two').width();
    var tween = new TimelineMax ()
      .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section-two>.content .section_mainImage>img", 1, {left: '20%'}),
        TweenMax.to(".section-two>.content .section_bcgImage_1", 1, {left: '70%'}),
        TweenMax.to(".section-two>.content .section_title", 1, {left: '55%'}),
        TweenMax.to(".section-two>.content .section_text", 1, {left: '55%'})
      ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".section-two .content", duration: '100%', offset: 0})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller_section2);



  });