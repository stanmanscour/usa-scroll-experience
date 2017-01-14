console.log('hey');
$(function(){

  var controller = new ScrollMagic.Controller({vertical: false});

  //mon animation que je vais linker plus tard
  var animation = TweenMax.to(".monTexte", 1, {
    rotation:360, y:100
  }, 0.5)

  var scene = new ScrollMagic.Scene({
    triggerElement: "#scene",
    duration: 300 // 300px
  })

  .on('start', function(){
    // console.log("c'est le début")
  })
  .on('end', function(event){
    // console.log("c'est la fin")
  })
  .setTween(animation) // link l'animation
  .addTo(controller) // link le controller
  .addIndicators(); // ajoute les indicateurs pour noobs

  });