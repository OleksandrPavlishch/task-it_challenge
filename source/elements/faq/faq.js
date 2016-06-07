'use strict';
(function () {
	var faqHeaders = $('.faq_accordion-item')
	, deployClass = 'is-deploy'
	, faqTextClass = '.faq_accordion-item-text';

	faqHeaders.on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass(deployClass).find(faqTextClass).slideToggle();
	});
})();