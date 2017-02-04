/*
*
* Scroll magic
*
*/

var $section_two = $('.section_two');

var controller_section2 = new ScrollMagic.Controller({vertical: false});

var section2Taille = $section_two.width();
var tween = new TimelineMax ()
.add([
        // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
        TweenMax.to(".section_two>.content .section_mainImage>img", 1, {left: '15%'}),
        TweenMax.to(".section_two>.content .section_bcgImage_1", 1, {left: '70%'}),
        TweenMax.to(".section_two>.content .section_title", 1, {left: '50%'}),
        TweenMax.to(".section_two>.content .section_text", 1, {left: '55%'})
        ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".section_two .content", duration: '100%', offset: 0})

    .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller_section2);
    });


/* 
*
* Mouse Parallax 
*
*/

var parallax = function parallax(e, target, layer, a, b) {
        var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
        var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    //$(target).offset({ top: y ,left : x });
    $(target).css(a, x+'px')
    $(target).css(b, y+'px')
};

var $cat_year = $('.contratATerme_year'),
    $cat_background = $('.contratATerme_background img'),
    $cat_action = $('.js-contratATerme_action');

$(function() {

    

    $cat_year.homePos = { x: $cat_year.css('left').split('px')[0], y: $cat_year.css('top').split('px')[0] };
    $cat_background.homePos = { x: $cat_background.css('left').split('px')[0], y: $cat_background.css('top').split('px')[0] };
    $cat_action.homePos = { x: $cat_action.css('left').split('px')[0], y: $cat_action.css('top').split('px')[0] };

    $('.section_two').mousemove( function(e){
        // $cat_year.homePos = { x: $cat_year.css('left').split('px')[0], y: $cat_year.css('top').split('px')[0] };
        // $cat_clinton_img.homePos = { x: $cat_clinton_img.css('left').split('px')[0], y: $cat_clinton_img.css('bottom').split('px')[0] };

        parallax(e, $cat_background, 40, 'left', 'top');
        parallax(e, $cat_year, 40, 'left', 'top');
        // parallax(e, $cat_clinton_img, 25, 'left', 'bottom');
        // parallax(e, $cat_title, 40, 'left', 'top');
        // parallax(e, $cat_intro, 60, 'left', 'top');
        parallax(e, $cat_action, 60, 'left', 'top');

    })
})

/*
*
* Mouse Action
*
*/

var $cat_title = $('.contratATerme_title');
var $cat_intro = $('.contratATerme_intro');
var $cat_clinton = $('.contratATerme_clinton img');
var $cat_optClinton = $('.contratATerme_optionalClinton')
// faire l'anim de ça î

var tweenCatClinton = TweenMax.to($cat_clinton, 1, {
    opacity: "0",
    bottom: '-19%',
    ease:Power1.easeInOut
})
tweenCatClinton.pause();

var tweenCatTexts = TweenMax.to($cat_intro, 1, {
    opacity: "0",
    top: '24%',
    ease:Power1.easeInOut
})
tweenCatTexts.pause();

var tweenCatTitle = TweenMax.to($cat_title, 1, {
    opacity: "0",
    top: '20%',
    ease:Power1.easeInOut,

})
tweenCatTitle.pause();

$cat_secondContent = $('.section_contentSecond');
var tweenCatSecondContent = TweenMax.to($cat_secondContent, 2, {
    bottom: '0%',
    ease:Power1.easeInOut
})
tweenCatSecondContent.pause();

var tl = new TimelineLite();
tl.add('skew')
    .add([tweenCatTexts.play(), tweenCatTitle.play(), tweenCatClinton.play()])
    .add(tweenCatSecondContent.play())
tl.pause();


$(function(){

    var cat_content_open = false;
    var $cat_content = $('.section_contentSecond');

    $cat_action.click(function(){

        // si c'est fermé -> ouvrir
        if (!cat_content_open){

            let containerWidth = $('#container').width();

            $('html, body').stop().animate({

            // disponible une fois qu'on aura la taille du document
            // scrollLeft: containerWidth * 13.2 / 100
           }, 1000, function(){
            tl.play();
            $("body").mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 0);
                event.preventDefault();   
            });
           })

            
            // tweenCatClinton.play();
            // tweenCatTitle.play();
            // tweenCatTexts.play();


            // animations
            
            

            
            // cacher le menu

            cat_content_open = true;

        // si c'est ouvert -> fermer
        } else {

           tl.reverse();

            //

            cat_content_open = false;
        }
        

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


