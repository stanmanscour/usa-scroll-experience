var parallaxActionAuthorised = true;

$(function(){
	

	var entranceShowTimeline = new TimelineMax();

	var $entTitle = $('.entrance_title'),
	$entDesc = $('.entrance_description'),
	$entHow = $('.entrance_howTo'),
	$entScrollA = $('.entrance_scrollAction'),
	$globalLogo = $('.menu-header')

	entranceShowTimeline
	.to($entTitle, 8, {})
	.from($entTitle, 1, {top: "30%", opacity: 0, ease: Power1.easeInOut}, "bigTitle")
	.from($entDesc, 1, {top: "43%", opacity: 0,ease: Power1.easeInOut}, "bigTitle+=1.5")
	.from($entHow, 1, { opacity: 0,ease: Power1.easeInOut }, 11)
	.from($entScrollA, 0.4, {opacity: 0 }, 12)
	.from($globalLogo, 0.4, {opacity: 0 }, 12)


	// animation scroll

	var scrollActionTimeline = new TimelineMax({onComplete:function() {
		this.restart()}
	});

	var $scSpanBlack = $('.entrance_scrollAction .spanBlack');
	var $scSpanWhite = $('.entrance_scrollAction .spanWhite');

	scrollActionTimeline
	.to($scSpanBlack, 1, {
		width: "90px",
		ease: Power1.easeInOut
	})
	.to($scSpanWhite, 1, {
		width: "90px",
		ease: Power1.easeInOut
	})
	.to($scSpanWhite, 1, {

	})
})

var $entrance_title = $('.entrance_title'),
    $entrance_desc = $('.entrance_description');



$(function() {
    $entrance_title.homePos = { x: $entrance_title.css('left').split('px')[0], y: $entrance_title.css('top').split('px')[0] };
    $entrance_desc.homePos = { x: $entrance_desc.css('left').split('px')[0], y: $entrance_desc.css('top').split('px')[0] };

    $('.section_entrance').mousemove(function(e) {
        parallax(e, $entrance_title, 100, 'left', 'top');
        parallax(e, $entrance_desc, 80, 'left', 'top');
    })
})