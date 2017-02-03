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

