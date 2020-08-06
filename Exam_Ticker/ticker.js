$(document).ready(function() {


	newsInterval = setInterval(timerLoop, 5000);

	$('#container').hover(function() {
		clearTimer();
	}, function() {
		startTimer();
	});

	$('.messages-content').click(function() {

	})

});

var timerLoop = function() {
	if ($('.messages-content').position().top > -730) {
		clickMore();
	} else {
		animateTop();
	}
};

function clearTimer() {
	clearInterval(newsInterval);
};

function startTimer() {
	newsInterval = setInterval(timerLoop, 5000);
}

function clickMore() {

	if($('.messages-content').position().top > 540) {
		$('.messages-content').animate({
			top: '-=270',
			easing: 'easeInOutExpo'
		}, 500, function() {
			$('.messages-content').stop(true, true);
		})
	}

	if($('.messages-content').position().top < 540) {
		var test = true;
		$('.messages-content').animate({
			top: '-=90',
			easing: 'easeInOutExpo'
		}, 500, function() {
			$('.messages-content').stop(true, true);
			$('#click-more').removeAttr('href');
			$('#click-more').attr('href', 'javascript:animateTop();');
		})
	}

};

function animateTop() {
	$('.messages-content').animate({
			top: '0',
			easing: 'easeInOutExpo'
		}, 500)
	$('#click-more').removeAttr('href');
	$('#click-more').attr('href', 'javascript:clickMore();');
};
