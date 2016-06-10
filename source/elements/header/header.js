'use strict';
(function () {
	var body = document.querySelector('body')
		, scrollClass = "is-scroll";
	
	var scrollWatch = function(){

		if(window.pageYOffset > window.innerHeight/5){
			body.classList.add(scrollClass);
		}

		window.onscroll = function() {
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if(scrolled > window.innerHeight/5){
				body.classList.add(scrollClass);
				return;
			}
			body.classList.remove(scrollClass);
		};
	};

//init
	scrollWatch();
})();