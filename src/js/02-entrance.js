var parallax = function parallax(e, target, layer, a, b) {
        var x = target.homePos.x - (e.pageX - target.homePos.x) / layer;
        var y = target.homePos.y - (e.pageY - target.homePos.y) / layer;
    //$(target).offset({ top: y ,left : x });
    $(target).css(a, x+'px')
    $(target).css(b, y+'px')
};

var $start_clinton = $('.entrance_candidats_clinton'),
	$start_trump = $('.entrance_candidats_trump');

$(function(){

	$start_clinton.homePos = { x: $start_clinton.css('right').split('px')[0], y: $start_clinton.css('bottom').split('px')[0] };
	$start_trump.homePos = { x: $start_trump.css('right').split('px')[0], y: $start_trump.css('bottom').split('px')[0] };

	// $('.section_entrance').mousemove( function(e){
	// 	console.log($start_clinton.homePos)
	// 	parallax(e, $start_clinton, 45, 'right', 'bottom');
	// 	parallax(e, $start_trump, 35, 'right', 'bottom');
	// })
})

