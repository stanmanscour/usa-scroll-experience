
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

function disableScroll() {
 window.onwheel = preventDefault;
}

var toggled = false;
var locked = false;

$('#button-julien').on('click', function(){
    // var sectionPos = $('');
    // var currentPos = $('.section-two').offset().left;
    var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    
    $('html, body').stop().animate({
     scrollTop: 670
   }, 1000, function(){
    if (locked){
     $('body').on({'mousewheel': function(e) {
          //if (e.target.id == 'el') return;
          e.preventDefault();
          e.stopPropagation();
        }
      }) 
      locked = true;
   } else {
          $('body').off({'mousewheel': function(e) {
          //if (e.target.id == 'el') return;
          e.preventDefault();
          e.stopPropagation();
        }
      }) 
     locked = false;
   }
 });
    
    
    if (toggled === false){
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
      $(document).css('overflow-x', '')
      toggled = true;
    } else {
      toggled = false;
      $('#section-2-id').css({
        'display': 'none',
        'background': 'blue'
      })
    }

  })



// window.scrollTo()
