
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