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
 
// Afficher le menu dès qu'on arrive sur la 2e section
function toggleMenu() {
    var doc = document.documentElement;
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var windowWidth = window.innerWidth;
    if(windowWidth/2 <= left && windowWidth*6.5 > left) {
        $('.menu_chronologie').addClass('opacity1');
    } else {
        $('.menu_chronologie').removeClass('opacity1');
    }
}
$(document).ready(function(){
    $(window).scroll(function() {
        toggleMenu();
    });
    toggleMenu();
});