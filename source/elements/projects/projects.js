'use strict';
(function () {
	$(".projects_slider").owlCarousel({
		dots: false
		, loop: true
		, navContainerClass: "projects_slider-nav"
		, navText: ''
		, nav: false
		, center: true
		, responsive: {
			1440: {
				items: 5
			}
			, 1026: {
				items: 4
				, nav: true
				, margin: 0
				, center: false
			}
			, 760: {
				items: 2
				, margin: 20
			}
			, 320: {
				items: 1.4
				, margin: 10
			}
		}
	});

	$(".projects_slider-item-images").owlCarousel({
		items: 1
		, mouseDrag: false
		, dots: false
		, loop: false
		, navText: ''
	});


})();