'use strict';
(function () {
	var $body = $('body')
	, $menuButton = $('.toggle-menu-button')
	, menuShowClass = 'is-menu-show'
	, menuClass = '.menu, .toggle-menu-button';


	$menuButton.on('click', function() {
		$body.toggleClass(menuShowClass);
	});

	$(document).click( function(event){
		if( $(event.target).closest(menuClass).length )
			return;
		$body.removeClass(menuShowClass);
		event.stopPropagation();
	});
})();