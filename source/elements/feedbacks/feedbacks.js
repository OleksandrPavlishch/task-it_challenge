'use strict';
(function () {
	$(".feedbacks_slider").owlCarousel({
		items: 1.3
		, mouseDrag: false
		, dots: false
		, center: true
		, loop: true
		, navText: ''
		, smartSpeed: 1000
		, autoplay: true
		, responsive: {
			1026: {
				items: 1
				, nav: true
				, loop: false
				, smartSpeed: 600
				, autoplay: false
			}
			, 760: {
				items: 1.5
				, loop: true
			}
		}
	});
})();