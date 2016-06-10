'use strict';
(function () {
	var $bannerSlider = $(".banner_slider")
	, $bannerSliderPrevButton = $(".banner_slider-prev-button")
	, $bannerSliderNextButton = $(".banner_slider-next-button");

	$bannerSlider.owlCarousel({
		items: 1
		, mouseDrag: false
		, dots: false
		, center: true
		, loop: true
		, navText: ''
		, responsive: {
			1026: {
				items: 1
				, mouseDrag: false
				, nav: true
			}
		}
	});


	$bannerSliderNextButton.on('click', function(event) {
		event.preventDefault();
		$bannerSlider.trigger('next.owl.carousel');
	});

	$bannerSliderPrevButton.on('click', function(event) {
		event.preventDefault();
		$bannerSlider.trigger('prev.owl.carousel');
	});

})();