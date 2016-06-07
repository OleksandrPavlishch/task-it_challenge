'use strict';
(function () {
	$(".feedbacks_slider").owlCarousel({
		items: 1.5
		, mouseDrag: false
		, dots: false
		, margin: 10
		, center: true
		, loop: true
		, navText: ''
		, responsive: {
			1026: {
				items: 1
				, margin: 0
				, nav: true
				, loop: false
			}
		}
	});
})();