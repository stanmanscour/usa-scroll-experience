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
        TweenMax.to(".section_two>.content .section_mainImage>img", 1, {left: '20%'}),
        TweenMax.to(".section_two>.content .section_bcgImage_1", 1, {left: '70%'}),
        TweenMax.to(".section_two>.content .section_title", 1, {left: '55%'}),
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

function parallax(e, target, layer, a, b) {
        var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
        var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    //$(target).offset({ top: y ,left : x });
    $(target).css(a, x+'px')
    $(target).css(b, y+'px')
};

$(function() {

    var $ww_year = $('.whitewater_year'),
    $ww_clinton_img = $('.whitewater_clinton img'),
    $ww_title = $('.whitewater_title'),
    $ww_intro = $('.whitewater_intro'),
    $ww_opt_clinton = $('.whitewater_optionalClinton'),
    $ww_background = $('.whitewater_background img'),
    $ww_action = $('.whitewater_action');

    $ww_year.homePos = { x: $ww_year.css('left').split('px')[0], y: $ww_year.css('top').split('px')[0] };
    $ww_clinton_img.homePos = { x: $ww_clinton_img.css('left').split('px')[0], y: $ww_clinton_img.css('bottom').split('px')[0] };
    $ww_title.homePos = { x: $ww_title.css('left').split('px')[0], y: $ww_title.css('top').split('px')[0] };
    $ww_intro.homePos = { x: $ww_intro.css('left').split('px')[0], y: $ww_intro.css('top').split('px')[0] };
    $ww_background.homePos = { x: $ww_background.css('left').split('px')[0], y: $ww_background.css('top').split('px')[0] };
    $ww_action.homePos = { x: $ww_action.css('left').split('px')[0], y: $ww_action.css('top').split('px')[0] };

    $('.section_two').mousemove( function(e){
        // $ww_year.homePos = { x: $ww_year.css('left').split('px')[0], y: $ww_year.css('top').split('px')[0] };
        // $ww_clinton_img.homePos = { x: $ww_clinton_img.css('left').split('px')[0], y: $ww_clinton_img.css('bottom').split('px')[0] };

        parallax(e, $ww_background, 40, 'left', 'top');
        parallax(e, $ww_year, 40, 'left', 'top');
        // parallax(e, $ww_clinton_img, 25, 'left', 'bottom');
        // parallax(e, $ww_title, 40, 'left', 'top');
        // parallax(e, $ww_intro, 60, 'left', 'top');
        parallax(e, $whitewater_action, 60, 'left', 'top');

    })

})
    // text2.homePos = { x: parseInt(text1.css('left').split('px')[0]), y: parseInt(text1.css('top').split('px')[0]) };
    // text3.homePos = { x: parseInt(text1.css('left').split('px')[0]), y: parseInt(text1.css('top').split('px')[0]) };
    // Man.homePos = { x: Man.offsetLeft, y: Man.offsetTop };
    // console.log(text1.homePos);
    // $('.section-two').mousemove(function (e) {
    //     parallax(e, text1, 10);
    //     parallax(e, text2, 25);
    //     parallax(e, text3, 20);
    // });

    



/*
*
*
*
*/

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


