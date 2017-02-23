var animLogo = true;
var $menu = $('.menu-screenSection');
var $menuML = $('.menuMentionsLegales');
var $hideScreen = $('.hideScreen');

$menu.data('open', 0);



var openMenu = function(){
  toggleScrollX();
  
  if ($menu.data('open') === 1){ // ouvert
    
    var tween3 = TweenMax.to($menu, 1, {css: {zIndex: "100"}})
    var tweenMenu = TweenMax.to($menuML, 1, {left: "-260px"})
    var tweenShadow = TweenMax.to($hideScreen, 2, {opacity: 0, ease: Power1.easeInOut})
    $menu.data('open', 0);
    
  } else { // fermé 
    
    var tween4 = TweenMax.to($menu, 1, {css: {zIndex: "10000"}})
    var tween2 = TweenMax.to($menuML, 1, {left: "0px"})
    var tweenShadow2 = TweenMax.to($hideScreen, 2, {opacity: 0.5, ease: Power1.easeInOut})
    $menu.data('open', 1);
    
  }  
}

var timelineActionLine = function($black, $white) {
    let tl = new TimelineMax();
    tl.to($black, 0.2, { width: "100%" })
        .to($white, 0.4, { width: "100%" }, "=+0.1")
        .to($black, 0, { width: "0%" })
        .to($white, 0, { width: "0%" })
}

$hideScreen.on('click', function(){
  openMenu();
})


$('.menu-header-logo-container').on('click', function() {
    
    openMenu();


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
