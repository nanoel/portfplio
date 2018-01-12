;(function($) {
	"use strict";

	var worksSlider = $('.ba-slider');

	worksSlider.slick({
		slide: '.ba-slide',
		prevArrow: '.ba-slider-prev',
		nextArrow: '.ba-slider-next',
		 infinite: true,
		 dots: true,
		 speed: 300,
		 slidesToShow: 1,
		 variableWidth: true

	});

})(jQuery);
