'use strict';
(function () {

	var $scrollLinks = $('.button_start, .logo, .menu_navigation-link')
		, $htmlBody = $('html, body')
		, $body = $('body')
		, topBlockId = '#banner'
		, $header = $('header');

	$scrollLinks.on('click', function(event) {
		event.preventDefault();

		var $this = $(this)
			, link = $this.attr("href")
			, section = $body.find(link)
			, headerHeight = (link !== topBlockId) ? $header.height() : 0;

		if(section.length){
			$htmlBody.animate({scrollTop: section.offset().top - headerHeight}, 1000);
			return;
		}
	});
})();