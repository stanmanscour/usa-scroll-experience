$(window).load(function() {

    var body = $("html, body");
    body.stop().animate({
        scrollLeft: 0
    })


    var scrollAllowed = false;

    var loaderAnimationTimeline = new TimelineMax();

    var $loaderText = $('.loader-absolute p'),
        $loaderHide = $('.blackLineLoader'),
        $loaderContainer = $('.loader-container');

    loaderAnimationTimeline
        .to($loaderHide, 1, {
            width: "100%",
            ease: Power1.easeInOut
        }, 1)
        .to($loaderHide, 0, {
            css: {
                right: "0px"
            }
        }, 2)
        .to($loaderText, 1, {
            opacity: "1"
        }, 2)
        .to($loaderHide, 1, {
            width: "0%",
            ease: Power1.easeInOut
        }, 2.3)
        

    $loaderContainer.delay(6000).fadeOut("1000");

    // $(".loader-container").fadeOut("1000");
})

var scrollAllowed = true;

function toggleScrollX() {
    if (scrollAllowed) {
        scrollAllowed = false;
        $('html, body').css('overflow-x', 'hidden');
    } else {
        scrollAllowed = true;
        $('html, body').css('overflow-x', 'auto');
    }
}



$(function() {


            /*
             *
             * Append table
             *
             */

            $("#container").wrapInner("<table cellspacing='30'><tr>");
            $(".section").wrap("<td>");


            /*
             *
             * Responsive
             *
             */

            var windowWidth,
                windowHeight;

            var updateWindow = function() {
                windowHeight = window.innerHeight;
                windowWidth = window.innerWidth;

                $('td').css('min-width', windowWidth + 'px');
                $('td').css('min-height', windowHeight + 'px');
                $('td').css('height', windowHeight + 'px');
                $('.chrono-menu').css('width', windowWidth + 'px');
            }

            updateWindow();

            $(window).resize(function() {
                updateWindow();
            })

            /*
             *
             * Mouse scroll
             *
             */
            $("body").mousewheel(function(event, delta) {
                if (scrollAllowed) {
                    this.scrollLeft -= (delta * 30);
                    event.preventDefault();
                }
            });