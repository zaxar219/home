$(document).ready(function(){
	
	var navToggleButton = $('#navigation-toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list-li-link');

	// События по клику на иконку навигации
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		
		if (navToggleButton.hasClass("active")) {
			navToggleButton.removeClass("active")
		} else {
			navToggleButton.addClass("active");
		}

	})
	// События по клику на ссылки в навигации
	navLink.on('click', function(){

		if ( navBlock.hasClass(navBlockOpen) ) {
			
			if (navToggleButton.hasClass("active")) {
				navToggleButton.removeClass("active")
			} else {
				navToggleButton.addClass("active");
			}
			
		}

		navBlock.removeClass(navBlockOpen);
		
	})
	
	
	
	
	// Вызов слайдера  
	$("#top-slider").owlCarousel({
		singleItem: true,
	});
	
	$("#agents-slider").owlCarousel({
		singleItem: true,
		
	});
	
	$("#bottom-slider").owlCarousel({
		singleItem: true,
		
		navigation: true,
		navigationText: ["",""],
		slideSpeed: 500
	});
	
	
	
	
	
});