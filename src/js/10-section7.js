var timelineGlobalAnim;

//////////

var controller_section7 = new ScrollMagic.Controller({ vertical: false });

var tweenSection7 = new TimelineMax()
    .add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_seven>.content .section_mainImage>img", 1, { left: '3%', bottom: '0%' }),
        TweenMax.to(".section_seven>.content .section_bcgImage_1", 1, { left: '70%' }),
        TweenMax.to(".section_seven>.content .section_title", 1, { left: '54%' }),
        TweenMax.to(".section_seven>.content .section_title2", 1, { left: '60%' }),
        TweenMax.to(".section_seven>.content .section_text", 1, { left: '55%' })
    ]);

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: ".section_seven .content", duration: '100%', offset: 0 })
    .setTween(tweenSection7)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller_section7);

$('.section_discover').on('click', function() {


    let p = $(this).attr('class').split('section_discover');
    let m = /js-(.*?)_action/g.exec(p[1])[1];

    var $thisContent = $('.js-section-' + m)

    discoverContent($thisContent, m);
});


var timelineActionLine = function($black, $white) {
    let tl = new TimelineMax();
    tl.to($black, 0.2, { width: "100%" })
        .to($white, 0.4, { width: "100%" }, "=+0.1")
        .to($black, 0, { width: "0%" })
        .to($white, 0, { width: "0%" })
}

var animLogo = true;

$('.menu-header-logo-container').on('click', function() {
    $('.menu-header-nav-container').toggle();

    if ($('.menu-header-nav-container').css('display') !== 'none') {
        animLogo = false;
    } else {
        animLogo = true;
    }
})

$('.menu-header-logo-container').on('mouseenter', function() {
    let $black = $(this).find('.actionBlackLine');
    let $white = $(this).find('.actionWhiteLine');

    if (animLogo) {
        timelineActionLine($black, $white);
    }

})



$('.section_discover').on('mouseenter', function() {

    let $black = $(this).find('.actionBlackLine');
    let $white = $(this).find('.actionWhiteLine');

    if ($black.length === 0) {
        $(this)
            .append($('<span/>').addClass('actionBlackLine'))
            .append($('<span/>').addClass('actionWhiteLine'));

        $black = $(this).find('.actionBlackLine');
        $white = $(this).find('.actionWhiteLine');
    }

    timelineActionLine($black, $white);
})



var animationPlaying = false;

var discoverContent = function($section, section) {

    let $sectionContent = $section.find('.section_contentSecond');
    let $sectionDiscoverAction = $section.find('.section_discover');

    // if animation is playing, exit

    let t = $section.data('open');

    if (animationPlaying) {
        return false;
    } else {
        animationPlaying = true;
    }

    // autorize scroll

    toggleScrollX();

    if (t === 0) { // fermé

        let containerWidth = $('#container').width();
        parallaxCatActionAuthorised = false;

        let offsetLeft = $section.offset().left;

        $('html, body').stop().animate({
                scrollLeft: offsetLeft
            },
            1000,

            // Après l'animation on exécute le code restant
            function() {

                var $sectionMainImg = $('.js-section-' + section + ' .section_mainImage img');
                var $sectionTitle = $('.js-section-' + section + ' .section_title');
                var $sectionIntro = $('.js-section-' + section + ' .section_text');
                var $sectionFunctionality = $('.js-section-' + section + ' .section_mainFunctionality');
                var $sectionNextBtn = $('.js-section-' + section + ' .section_next');


                timelineGlobalAnim = new TimelineMax();

                timelineGlobalAnim
                    .to($sectionMainImg, 1, { bottom: "05%", opacity: "0", ease: Power1.easeInOut }, "hideTrump+=0.25")
                    .to($sectionTitle, 1, { top: "15%", opacity: "0", ease: Power1.easeInOut }, "hideTrump+=0.35")
                    .to($sectionIntro, 1, { top: "20%", opacity: "0", ease: Power1.easeInOut }, "hideTrump+=0.45")
                    .to($chronoMenu, 0.8, { bottom: "-70px", ease: Power1.easeInOut }, "hideTrump+=0.75")
                    .to($sectionFunctionality, 1, { top: "15%", opacity: "0", ease: Power1.easeInOut }, "hideTrump+=0.55")
                    .to($sectionContent, 2, { top: "10%", ease: Power1.easeInOut })
                    .to($sectionNextBtn, 2, {
                        top: "76%",
                        opacity: "0",
                        ease: Power1.easeInOut
                    }, "hideTrump")

                $sectionDiscoverAction.css('top', '5%');

                // $('.js-contratATerme_action .upperText').html('Close');
                // $('.js-contratATerme_action .simpleText').html('Go to the timeline');

                animationPlaying = false;

            });

        $section.data('open', 1)


    } else { // ouvert

        timelineGlobalAnim.reverse();

        parallaxCatActionAuthorised = true;

        $sectionDiscoverAction.css('top', '53%')

        animationPlaying = false;
        $section.data('open', 0);
    }
}