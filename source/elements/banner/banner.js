'use strict';
(function () {
	$(".banner_slider").owlCarousel({
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
})();