// code pour l'initialisation
// # calcul taille fenetre 
// # loading

// var windowWidth,
// windowHeight;

// var updateWindow = function(){
// 	windowHeight = window.innerHeight;
// 	windowWidth = window.innerWidth;
	
// 	var $entranceContainer = $('.usa-entrance-container');

// 	$entranceContainer.css('width', windowWidth+'px');
// 	$entranceContainer.css('height', windowHeight+'px');
	
// 	console.log("nouvelle height = " +windowHeight+"px");
// 	console.log("nouvelle width = " +windowWidth+"px");
// }


// $(document).ready(function(){
// 	updateWindow();
	
// 	$(window).resize(function(){
// 		updateWindow();
// 	})
// })


$(function () { // wait for document ready

  var controller = new ScrollMagic.Controller();

  var horizontalSlide = new TimelineMax()
  // animate panels
  .to("#js-slideContainer", 1,   {x: "-20%"}) 
  .to("#js-slideContainer", 1,   {x: "-40%"})
  .to("#js-slideContainer", 1,   {x: "-60%"})
  .to("#js-slideContainer", 1,   {x: "-80%"})

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
  .setPin("#js-wrapper")
  .setTween(horizontalSlide)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);


  });



var toggled = false;
var locked = false;


var sectionDeuxOpen = false;



$('.js-open-sectionDeux').on('click', function(){

  if (!sectionDeuxOpen){ /* si la section 2 est fermée */

    $('html, body').stop().animate({
      scrollTop: 3605 * 20 / 100
    }, 1000, function(){
      $('#section-2-id').css({
        'display': 'block',
        'height': '100%',
        'overflow-y': 'scroll',
        'background': 'yellow',
        'width': '60%',
        'position': 'absolute',
        'left': '50%',
        'transform': 'translate(-50%, 25%)'
      })
    });

    sectionDeuxOpen = true;

  } else { /* si la section 2 est ouverte */

   $('#section-2-id').css({
    'display': 'none',
    'background': 'blue'
  })

   sectionDeuxOpen = false;

 }

 
})



//     //var text1 =$('.section_discover_text1').parent();
//     var text1 = $('#text1');
//     var text2 = $('#text2');
//     var text3 = $('#text3');
    


//     // var Man = document.getElementById('element2');
//     text1.homePos = { x: parseInt(text1.css('left').split('px')[0]), y: parseInt(text1.css('top').split('px')[0]) };
//     text2.homePos = { x: parseInt(text1.css('left').split('px')[0]), y: parseInt(text1.css('top').split('px')[0]) };
//     text3.homePos = { x: parseInt(text1.css('left').split('px')[0]), y: parseInt(text1.css('top').split('px')[0]) };
//     // Man.homePos = { x: Man.offsetLeft, y: Man.offsetTop };
//     console.log(text1.homePos);
//     $('.section-two').mousemove(function (e) {
//         parallax(e, text1, 10);
//         parallax(e, text2, 25);
//         parallax(e, text3, 20);
//     });

// function parallax(e, target, layer) {
//     var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
//     var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
//     //$(target).offset({ top: y ,left : x });
//     $(target).css('left', x+'px')
//     $(target).css('top', y+'px')
//     console.log(x, y);
// };
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
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

$(function() {
    $("#container").wrapInner("<table cellspacing='30'><tr>");
    $(".section").wrap("<td>");
  });

var windowWidth,
    windowHeight;

var updateWindow = function(){
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  
  $('td').css('min-width', windowWidth+'px');
  $('td').css('min-height', windowHeight+'px');
  $('td').css('height', windowHeight+'px');
  
  console.log("nouvelle height = " +windowHeight+"px");
  console.log("nouvelle width = " +windowWidth+"px");
}

$(document).ready(function(){
  $("body").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();		
	});
  
  console.log('init');
  updateWindow();
  
  $(window).resize(function(){
    console.log("hey");
   updateWindow();
 })
  
})