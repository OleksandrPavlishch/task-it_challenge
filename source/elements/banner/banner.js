'use strict';
(function () {
	var $bannerSlider = $(".banner_slider")
	, $bannerSliderPrevButton = $(".banner_slider-prev-button")
	, $bannerSliderPrevButtonPreviewImage = $bannerSliderPrevButton.find('.banner_slider-button-preview-image')
	, $bannerSliderPrevButtonPreviewName = $bannerSliderPrevButton.find('.banner_slider-button-preview-text-name')
	, $bannerSliderPrevButtonPreviewTitle = $bannerSliderPrevButton.find('.banner_slider-button-preview-text-title')
	, $bannerSliderNextButton = $(".banner_slider-next-button")
	, $bannerSliderNextButtonPreviewImage = $bannerSliderNextButton.find('.banner_slider-button-preview-image')
	, $bannerSliderNextButtonPreviewName = $bannerSliderNextButton.find('.banner_slider-button-preview-text-name')
	, $bannerSliderNextButtonPreviewTitle = $bannerSliderNextButton.find('.banner_slider-button-preview-text-title');



	var changeArrowPreview = function (event) {
		var $this = $(event.target).find('.active')
		, $prev = $this.prev()
		, $next = $this.next()
		, prevImageUrl = $prev.find('.banner_slider-item-image').data('bg-image-url')
		, nextImageUrl = $next.find('.banner_slider-item-image').data('bg-image-url')
		, prevHeader = $prev.find('.banner_slider-item-text-header').text()
		, nextHeader = $next.find('.banner_slider-item-text-header').text()
		, prevTitle = $prev.find('.banner_slider-item-text-title').text()
		, nextTitle = $next.find('.banner_slider-item-text-title').text();


		$bannerSliderPrevButtonPreviewImage.css('background-image', 'url("' + prevImageUrl + '")');
		$bannerSliderPrevButtonPreviewName.text(prevHeader);
		$bannerSliderPrevButtonPreviewTitle.text(prevTitle);
		$bannerSliderNextButtonPreviewImage.css('background-image', 'url("' + nextImageUrl + '")');
		$bannerSliderNextButtonPreviewName.text(nextHeader);
		$bannerSliderNextButtonPreviewTitle.text(nextTitle);

	};

	$bannerSlider.owlCarousel({
		items: 1
		, mouseDrag: false
		, dots: false
		, center: true
		, loop: true
		, navText: ''
		, onInitialized: changeArrowPreview
		, onTranslated: changeArrowPreview
		, autoplay: true
		, autoplayTimeout: 7000
		, autoplayHoverPause: true
		, responsive: {
			1026: {
				items: 1 
				, mouseDrag: false
				, nav: true
			}
			, 320: {
				items: 1.2
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