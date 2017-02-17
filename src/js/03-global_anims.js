
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
                var $sectionTitle2 = $('.js-section-' + section + ' .section_title2');
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
                    .to($sectionNextBtn, 2, { top: "76%", opacity: "0", ease: Power1.easeInOut }, "hideTrump")

                    if ($sectionTitle2 !== 'undefined'){
                        timelineGlobalAnim.to($sectionTitle2, 1, { top: "15%", opacity: "0", ease: Power1.easeInOut }, "hideTrump+=0.35")
                    }

                //$sectionDiscoverAction.css('top', '5%');

                var changeDiscoverText = function(){
                        $sectionDiscoverAction.find('.upperText').text('go Back');
                        $sectionDiscoverAction.find('.simpleText').text('Jump to the timeline');
                }

                var changeDiscoverTextReverse = function(){
                    $sectionDiscoverAction.find('.upperText').text('gergrgk');
                    $sectionDiscoverAction.find('.simpleText').text('Jump to the timeline');
                }

                TimelineDiscoverAction = new TimelineMax();

                TimelineDiscoverAction
                    .to($sectionDiscoverAction, 1, {
                        opacity: 0
                    })
                    .to($sectionDiscoverAction, 1, {
                        top: "5%",
                        onComplete: changeDiscoverText,
                        onReverseComplete: changeDiscoverTextReverse
                    })
                    .to($sectionDiscoverAction, 1, {
                        opacity: 1
                    })

                   
                

                // $('.js-contratATerme_action .upperText').html('Close');
                // $('.js-contratATerme_action .simpleText').html('Go to the timeline');

                animationPlaying = false;

            });

        $section.data('open', 1)


    } else { // ouvert

        timelineGlobalAnim.reverse();

        parallaxCatActionAuthorised = true;

        // $sectionDiscoverAction.css('top', '53%')

        
        

        TimelineDiscoverAction.reverse();

        animationPlaying = false;
        $section.data('open', 0);
    }
}

/*
*MENU CHRONOLOGIE
*
*/
 
var controllerMenu = new ScrollMagic.Controller({ vertical: false, globalSceneOptions: {duration: '100%'}});
 
    new ScrollMagic.Scene({triggerElement: ".section_two"})
                    .setClassToggle(".nav_section1 a", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controllerMenu);
 
    new ScrollMagic.Scene({triggerElement: ".section_three"})
                    .setClassToggle(".nav_section2 a", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controllerMenu);
 
    new ScrollMagic.Scene({triggerElement: ".section_four"})
                    .setClassToggle(".nav_section3 a", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controllerMenu);
 
    new ScrollMagic.Scene({triggerElement: ".section_five"})
                    .setClassToggle(".nav_section4 a", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controllerMenu);
 
    new ScrollMagic.Scene({triggerElement: ".section_six"})
                    .setClassToggle(".nav_section5 a", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controllerMenu);
 
    new ScrollMagic.Scene({triggerElement: ".section_seven"})
                    .setClassToggle(".nav_section6 a", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controllerMenu);
 
    var controllerMenuLine = new ScrollMagic.Controller({ vertical: false});
    var tweenLine = TweenMax.to(".chrono-menu-line", 0.5, {
        width: "100%"
    });
    var MenuLineSccene = new ScrollMagic.Scene({
      triggerElement: "#container",
      duration: "1400%"
    })
    .setTween(tweenLine)
    .addIndicators()
    .addTo(controllerMenuLine);    



//Section scrollTo
var scrollSectionButton = $('[id^=scrollTo_section]');
scrollSectionButton.click(function () {
    var elementId = $(this).attr('href');
    var offsetLeft = $(elementId).offset().left;
    /*TweenLite.to(
        $('body')[0],
        2,
        {
            scrollTo: {
                x: $(elementId).offset().left
            },
            ease: Power2.easeInOut
        }
    );*/
    var body = $("html, body");
    body.stop().animate(
        {
            scrollLeft: offsetLeft
        },
        'slow'
    );
    return false;
});


var $chronoMenu = $('.chrono-menu');

// Afficher le menu dès qu'on arrive sur la 2e section
function toggleMenu() {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var windowWidth = window.innerWidth;
    var ChronoMenuHeight = $chronoMenu.css('height');
    if(windowWidth/2 <= left && windowWidth*6.5 > left) {
        //$('.menu_chronologie').addClass('opacity1');

        var tweenChronoMenu = TweenMax.to($chronoMenu, 1, {
            opacity: 1,
            bottom: '0%',
            ease:Circ.easeOut
           // bottom: ChronoMenuHeight + 'px'
        })

    } else {
        // $('.menu_chronologie').removeClass('opacity1');
        var tweenChronoMenu = TweenMax.to($chronoMenu, 2, {
            opacity: 1,
            bottom: '-64px',
            ease:Circ.easeOut
            //bottom: '-' + ChronoMenuHeight + 'px'
        })
    }
}
$(document).ready(function(){
    $(window).scroll(function() {
        toggleMenu();
    });
    toggleMenu();
});

// Div link next section
$('.section2to3').click(function() {
    var offsetLeft = $("#scroll_sectionThree").offset().left;

    // On anime le slide 2 pour qu'il soit centré dans la fenêtre
    $('html, body').stop().animate(
    {
        scrollLeft: offsetLeft
    },
    1000);
    return false;

});


$('.section3to4').click(function() {
    var offsetLeft = $("#scroll_sectionFour").offset().left;

    // On anime le slide 2 pour qu'il soit centré dans la fenêtre
    $('html, body').stop().animate(
    {
        scrollLeft: offsetLeft
    },
    1000);
    return false;

});

$('.section4to5').click(function() {
    var offsetLeft = $("#scroll_sectionFive").offset().left;

    // On anime le slide 2 pour qu'il soit centré dans la fenêtre
    $('html, body').stop().animate(
    {
        scrollLeft: offsetLeft
    },
    1000);
    return false;

});

$('.section5to6').click(function() {
    var offsetLeft = $("#scroll_sectionSix").offset().left;

    // On anime le slide 2 pour qu'il soit centré dans la fenêtre
    $('html, body').stop().animate(
    {
        scrollLeft: offsetLeft
    },
    1000);
    return false;

});


$('.section6to7').click(function() {
    var offsetLeft = $("#scroll_sectionSeven").offset().left;

    // On anime le slide 2 pour qu'il soit centré dans la fenêtre
    $('html, body').stop().animate(
    {
        scrollLeft: offsetLeft
    },
    1000);
    return false;

});

// let g = $('<div/>').css({
//         width: "100%",
//         height: "100%",
//         background: "red"
//     })


// $(function(){
//   var curDown = false,
//       curYPos = 0,
//       curXPos = 0;
//   $(window).mousemove(function(m){
//     if(curDown === true){
//      $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY)); 
//      $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
//     }
//   });
  
//   $(window).mousedown(function(m){
//     curDown = true;
//     curYPos = m.pageY;
//     curXPos = m.pageX;
//   });
  
//   $(window).mouseup(function(){
//     curDown = false;
//   });
// })