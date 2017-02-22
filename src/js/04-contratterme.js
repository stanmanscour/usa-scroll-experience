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
            TweenMax.to(".section_two>.content .section_mainImage>img", 1, { left: '8%', bottom: '-15%' }),
            TweenMax.to(".section_two>.content .section_bcgImage_1", 1, { left: '20%' }),
            TweenMax.to(".section_two>.content .section_title", 1, { left: '50%' }),
            TweenMax.to(".section_two>.content .section_text", 1, { left: '55%' })
        ]);

    // build scene
    var scene = new ScrollMagic.Scene({ triggerElement: ".section_two .content", duration: '100%', offset: 0 })
        .setTween(tweenSection2)
         // add indicators (requires plugin)
        .addTo(controller_section2);
    });


    var controller_section2Menu = new ScrollMagic.Controller({ vertical: false });
    var tweenLine = TweenMax.to(".chrono-menu-lineSection", 1, {
        width: "100%"
    });

    var sceneMenuSection2 = new ScrollMagic.Scene({ 
        triggerElement: ".section_two .content",
        duration: '100%',
        offset: 0
     })
     .setTween(tweenLine)
     
     .addTo(controller_section2Menu);
    


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
        $cat_action = $('.js-contratATerme_action');



    $(function() {
        $cat_year.homePos = { x: $cat_year.css('left').split('px')[0], y: $cat_year.css('top').split('px')[0] };
        $cat_action.homePos = { x: $cat_action.css('left').split('px')[0], y: $cat_action.css('top').split('px')[0] };

        $('.section_two').mousemove(function(e) {
            parallax(e, $cat_year, 40, 'left', 'top');
            
            let sectionOpen = $('.section_two').data('open');

            if (!sectionOpen) {
                parallax(e, $cat_action, 60, 'left', 'top');
            }
        })
    })

    /*
     *
     * Mouse Action
     *
     */