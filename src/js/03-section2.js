    /*
     *
     * Scroll magic
     *
     */

    var $section_two = $('.section_two');

    var controller_section2 = new ScrollMagic.Controller({ vertical: false });

    var section2Taille = $section_two.width();
    var tweenSection2 = new TimelineMax()
        .add([
            // TweenMax.to(".section-two .section_bcgImage_flag>img", 1, {left: "-30"}),
            TweenMax.to(".section_two>.content .section_mainImage>img", 1, { left: '15%' }),
            TweenMax.to(".section_two>.content .section_bcgImage_1", 1, { left: '70%' }),
            TweenMax.to(".section_two>.content .section_title", 1, { left: '50%' }),
            TweenMax.to(".section_two>.content .section_text", 1, { left: '55%' })
        ]);

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: ".section_two .content", duration: '100%', offset: 0 })
        .setTween(tweenSection2)
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
    $(target).css(a, x + 'px')
    $(target).css(b, y + 'px')
};

var $cat_year = $('.contratATerme_year'),
    $cat_background = $('.contratATerme_background img'),
    $cat_action = $('.js-contratATerme_action');

var parallaxCatActionAuthorised = true;

$(function() {

    $cat_year.homePos = { x: $cat_year.css('left').split('px')[0], y: $cat_year.css('top').split('px')[0] };
    $cat_background.homePos = { x: $cat_background.css('left').split('px')[0], y: $cat_background.css('top').split('px')[0] };
    $cat_action.homePos = { x: $cat_action.css('left').split('px')[0], y: $cat_action.css('top').split('px')[0] };

    $('.section_two').mousemove(function(e) {
        // $cat_year.homePos = { x: $cat_year.css('left').split('px')[0], y: $cat_year.css('top').split('px')[0] };
        // $cat_clinton_img.homePos = { x: $cat_clinton_img.css('left').split('px')[0], y: $cat_clinton_img.css('bottom').split('px')[0] };

        parallax(e, $cat_background, 40, 'left', 'top');
        parallax(e, $cat_year, 40, 'left', 'top');
        // parallax(e, $cat_clinton_img, 25, 'left', 'bottom');
        // parallax(e, $cat_title, 40, 'left', 'top');
        // parallax(e, $cat_intro, 60, 'left', 'top');

        if (parallaxCatActionAuthorised) {
            // console.log(parallaxCatActionAuthorised);
            parallax(e, $cat_action, 60, 'left', 'top');
        }
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
var $cat_optClinton = $('.contratATerme_optionalClinton');
var $cat_MainFunctionality_Video = $('.contratATerme_mainFunctionality img');
var $cat_MainFunctionality_Container = $('.section_mainFunctionality.contratATerme_gif');

var tweenCatFunctionalityVideo = TweenMax.to($cat_MainFunctionality_Video, 1, {
    css: {
        scale: 1.3
    },
    ease: Quad.easeInOut
});
tweenCatFunctionalityVideo.pause();

var tweenCatFunctionalityHide = TweenMax.to($cat_MainFunctionality_Container, 1, {
    opacity: "0",
    top: '35%',
    ease: Power1.easeInOut
});
tweenCatFunctionalityHide.pause();

var tweenCatClinton = TweenMax.to($cat_clinton, 1, {
    opacity: "0",
    bottom: '-17%',
    ease: Power1.easeInOut
});
tweenCatClinton.pause();

var tweenCatTexts = TweenMax.to($cat_intro, 1, {
    //opacity: "0",
    top: '10%',
    left: '17%',
    //width: '470px',
    ease: Power1.easeInOut
});
tweenCatTexts.pause();

var tweenCatTitle = TweenMax.to($cat_title, 1, {
    //opacity: "0",
    top: '4%',
    left: '17%',
    ease: Power1.easeInOut,
});
tweenCatTitle.pause();

var tweenCatTitleWidth = TweenMax.to($('#text1'), 1, {
    width: '470px'
});
tweenCatTitleWidth.pause();

var tweenCatAction = TweenMax.to($cat_action, 0.8, {
    top: '10%',
    ease: Power1.easeInOut,
    onComplete: function() {}
});
tweenCatAction.pause();


$cat_secondContent = $('.section_contentSecond');
var tweenCatSecondContent = TweenMax.to($cat_secondContent, 2, {
    top: '20%',
    ease: Power1.easeInOut
});
tweenCatSecondContent.pause();

var tl = new TimelineLite();
tl.add('skew')
    .add([
        tweenCatTexts.play(),
        tweenCatTitle.play(),
        tweenCatTitleWidth.play(),
        tweenCatClinton.play(),
        tweenCatFunctionalityHide.play()
    ])
    .add(tweenCatAction.play())
    .add(tweenCatSecondContent.play())
tl.pause();

// var cat_MainFunctionality_open = true;



$('.contratATerme_mainFunctionality').on('mouseover', function() {
    tweenCatFunctionalityVideo.play();
});

$('.contratATerme_mainFunctionality').on('mouseout', function() {
    tweenCatFunctionalityVideo.reverse();
});

$(function() {

    var cat_content_open = false;
    var cat_content_opening = false;
    var $cat_content = $('.section_contentSecond');

    $cat_action.click(function(evt) {
        console.log(evt);
        // console.log('cat_content_opening: '+cat_content_opening);
        if (cat_content_opening) {
            // Exit function si l'animation est déjà en cours
            return false;
        } else {
            cat_content_opening = true;
        }

        // autoriser / interdire le scroll
        toggleScrollX();

        // si c'est fermé -> ouvrir
        if (!cat_content_open) {

            let containerWidth = $('#container').width();
            parallaxCatActionAuthorised = false;
            // console.log(parallaxCatActionAuthorised);

            // On récupère la position du slide 2
            var offsetLeft = $("#scroll_sectionTwo").offset().left;

            // On anime le slide 2 pour qu'il soit centré dans la fenêtre
            $('html, body').stop().animate(
            {
                scrollLeft: offsetLeft
            },
            1000,

            // Après l'animation on exécute le code restant
            function() {

                tl.play();
                $('.js-contratATerme_action .upperText').html('Close');
                $('.js-contratATerme_action .simpleText').html('Go to the timeline');


                cat_content_opening = false;

            });

            // cacher le menu

            cat_content_open = true;

            // si c'est ouvert -> fermer
        } else {

            tl.reverse();
            $('.js-contratATerme_action .upperText').html('Learn More');
            $('.js-contratATerme_action .simpleText').html('Visit cattle futures');

            //parallaxCatActionAuthorised = true;

            cat_content_opening = false;

            cat_content_open = false;
        }

            
        

    });

    // var SecondContentcontroller = new ScrollMagic.Controller();

    // var scene = new ScrollMagic.Scene({
    //             triggerElement: ".container_secondBox",
    //             offset: '400%'
    //         })
    //         .setTween(".container_secondBox", 0.5, {backgroundColor: "green"}) // trigger a TweenMax.to tween
    //         .addIndicators() // add indicators (requires plugin)
    //         .addTo(SecondContentcontroller);



});



// On récupère la position du slide 2
