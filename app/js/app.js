$(function () {

	var $img  = $('.img-wrapper');
	var $text = $('.text-wrapper');
	var $nav  = $('nav');
	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	var animationstack = 'animated fadeInUp';

	// animation end and start
	$.fn.add_animation = function(animation, property, value) {
		return this.addClass(animation).css(property, value);
	}


	animationEffect = function(nodeToListen, nodeToAnimate) {
		nodeToListen.one(animationend, function(){
			nodeToAnimate.add_animation(animationstack, 'visibility', 'visible');
		})
	}

	animationEffect($img, $text);
	animationEffect($text, $nav);

});

// dayNnight
var date = 	new Date();
var time = date.getHours();
var imgToChange = $('.profile');

if (time >= 22 && time <= 8) {
	imgToChange.attr('src', '/images/sleepycolin.png');
} else {
	imgToChange.attr('src', '/images/colin.png');
}

// copyright update
document.getElementById('year').innerHTML = new Date().getFullYear()

// fun
console.log('%c Oh You Fancy, huh? ', 'background: #F7F7F7; color: #1584da');
