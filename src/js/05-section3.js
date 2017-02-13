var controller_section3 = new ScrollMagic.Controller({ vertical: false });

var tweenSection3 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_three>.content .section_mainImage>img", 1, { left: '15%', bottom: '-10%' }),
        TweenMax.to(".section_three>.content .section_bcgImage_1", 1, { left: '70%' }),
        TweenMax.to(".section_three>.content .section_title", 1, { left: '50%' }),
        TweenMax.to(".section_three>.content .section_text", 1, { left: '55%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_three .content", duration: '100%', offset: "-400%" })
    .setTween(tweenSection3)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller_section3);

/*
 *
 *
 * Animation Hide Content
 *
 */

var $trumpMafia = $('.js-section-mafiaTrump .section_mainImage img');
var $titleMafia = $('.js-section-mafiaTrump .section_title');
var $introMafia = $('.js-section-mafiaTrump .section_text');
var $functionalityMafia = $('.js-section-mafiaTrump .section_mainFunctionality');


var timelineTrumpMafiaShowContent = new TimelineMax()

timelineTrumpMafiaShowContent
    .to($trumpMafia, 1, { bottom: "05%", opacity: "0", ease: Power1.easeInOut }, "hideTrump")
    .to($titleMafia, 1, { top: "15%", opacity: "0", ease: Power1.easeInOut }, "hideTrump")
    .to($introMafia, 1, { top: "24%", opacity: "0", ease: Power1.easeInOut }, "hideTrump")
    .to($chronoMenu, 0.8, { bottom: "-70px", ease: Power1.easeInOut }, "hideTrump+=0.75")
    .to($functionalityMafia, 1, {
        top: "15%",
        opacity: "0",
        ease: Power1.easeInOut
    }, "hideTrump")

timelineTrumpMafiaShowContent.pause();