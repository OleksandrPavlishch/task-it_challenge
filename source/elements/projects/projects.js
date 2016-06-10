'use strict';
(function () {
	$(".projects_slider").owlCarousel({
		dots: false
		, navContainerClass: "projects_slider-nav"
		, navText: ''
		, nav: false
		, mouseDrag: false
		, smartSpeed: 1000
		, responsive: {
			1440: {
				items: 5
			}
			, 1026: {
				items: 4
				, loop: false
				, nav: true
				, margin: 0
				, center: false
			}
			, 760: {
				items: 2.5
				, margin: 20
				, center: true
				, loop: true
			}
			, 300: {
				items: 1.4
				, margin: 10
				, center: true
				, loop: true
			}
		}
	});

	$(".projects_slider-item-images").owlCarousel({
		items: 1
		, mouseDrag: false
		, touchDrag: false
		, dots: false
		// , loop: false
		, navText: ''
		, nav: true
		, navContainerClass: "projects_slider-item-images-nav"
	});


})();