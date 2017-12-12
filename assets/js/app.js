//Esconder las Diapositivas
//$(document).ready(() => {


var imgItems = $('.slide li').length; // Numero de Slides
var imgPos = 1;

	// Agregando paginación
	for(i = 1; i <= imgItems; i++){
		$('.page').append('<li><span class="fa fa-circle"></span></li>');
	} 

	$('.slide li').hide(); // Ocultamos las Diapositivas 
	$('.slide li:first').show(); // Mostramos sólo el primero
	$('.page li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.page li').click(pagination);
	$('.span .fa-chevron-right').click(nextSlider);
	$('.span .fa-chevron-left').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

    function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slide li').hide(); // Ocultamos todos los slides
		$('.slide li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.page li').css({'color': '#858585'});
		$(this).css({'color': '#088A68'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.page li').css({'color': '#858585'});
		$('.page li:nth-child(' + imgPos +')').css({'color': '#088A68'});

		$('.slide li').hide(); // Ocultamos todos los slides
		$('.slide li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.page li').css({'color': '#858585'});
		$('.page li:nth-child(' + imgPos +')').css({'color': '#088A68'});

		$('.slide li').hide(); // Ocultamos todos los slides
		$('.slide li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}




//});

