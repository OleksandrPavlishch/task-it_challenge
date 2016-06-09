'use strict';
(function () {
	$(".progects_slider").owlCarousel({
		items: 1.2
		, dots: false
		, loop: true
		, navText: ''
		, responsive: {
			1026: {
				items: 4
				, nav: true
			}
			, 760: {
				items: 3
			}
		}
	});

	$(".progects_slider-item-images").owlCarousel({
		items: 1
		, mouseDrag: false
		, dots: false
		, loop: false
		, navText: ''
	});


})();