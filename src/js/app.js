import $ from 'jquery'
import {init} from 'ityped';

$(function() {
	$('.box2').hover(function() {
	$(this).addClass('jello');
	}, function() {
		$(this).removeClass('jello');

	});

	$('.box3').hover(function() {
		$(this).addClass('rubberBand');
	}, function() {
		$(this).removeClass('rubberBand');

	});
});

init('#ityped', {
	// required - for now, only accepting texts
	strings: ['>>> See detail...'],
	//optional
	typeSpeed: 55, //default
	//optional
	backSpeed: 30, //default
	//optional
	startDelay: 500, //default
	//optional
	backDelay: 500, //default
	//optional
	loop: false, //default
	//optional
	showCursor: true, //default
	//optional
	cursorChar: "|", //default
	// optional callback called once the last string has been typed
	onFinished: function onFinished() {
	}
});
