$(document).ready(function(){
	
	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	//Создали переменные
	var pull = $("#navigation-toggle");
	var menu = $(".navigation ul");
	
	
	//Описание событие при нажатии на ссылку
	$(pull).on("click", function(e){
		//Отменяем стандартное повидение ссылки в браузере
		e.preventDefault();
		//Открываем/Скрываем меню

		menu.slideToggle();
		
		//Добовляем модификатор --activ
		$(this).toggleClass('navigation__toggle-button--active');
	});

	
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 768) {
	        menu.removeAttr('style');
	        pull.removeClass('navigation__toggle-button--active');
	    } else {

	    }
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});
	
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