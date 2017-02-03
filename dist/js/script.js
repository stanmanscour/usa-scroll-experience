// code pour l'initialisation
// # calcul taille fenetre 
// # loading

var windowWidth,
windowHeight;

var updateWindow = function(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	
	var $entranceContainer = $('.section_entrance');

	$entranceContainer.css('width', windowWidth+'px');
	$entranceContainer.css('height', windowHeight+'px');
	
	console.log("nouvelle height = " +windowHeight+"px");
	console.log("nouvelle width = " +windowWidth+"px");
}


$(document).ready(function(){
	updateWindow();
	
	$(window).resize(function(){
		updateWindow();
	})
})


// $(function () { // wait for document ready


// $('.js-open-sectionDeux').on('click', function(){

//   if (!sectionDeuxOpen){ /* si la section 2 est fermée */

//     $('html, body').stop().animate({
//       scrollTop: 3605 * 20 / 100
//     }, 1000, function(){
//       $('#section-2-id').css({
//         'display': 'block',
//         'height': '100%',
//         'overflow-y': 'scroll',
//         'background': 'yellow',
//         'width': '60%',
//         'position': 'absolute',
//         'left': '50%',
//         'transform': 'translate(-50%, 25%)'
//       })
//     });

//     sectionDeuxOpen = true;

//   } else { /* si la section 2 est ouverte */

//    $('#section-2-id').css({
//     'display': 'none',
//     'background': 'blue'
//   })

//    sectionDeuxOpen = false;

//  }

 
// })
// });


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
    this.scrollLeft -= (delta * 2);
    event.preventDefault();   
  });
  
  console.log('init');
  updateWindow();
  
  $(window).resize(function(){
    console.log("hey");
   updateWindow();
 })
  
})

