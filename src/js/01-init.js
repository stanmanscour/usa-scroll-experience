$(window).load(function() {
    $(".loader-container").fadeOut("1000");
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
            }

            updateWindow();

            $(window).resize(function() {
                console.log("hey");
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