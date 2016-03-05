$(document).ready(function() {
		/*	GENERATE BOARD	*/
		$('.square').remove();
		$('.row').remove();
		for(var rowNumber=0; rowNumber<10; rowNumber++)
			$('#board').append('<div id="row' + rowNumber + '" class="row"></div>');				

		/*	
			necesaria la distincion "index + y" para poder asignar la clase "green" o "blue" correctamente.
			debido a que los numeros (en este caso, aleatorios) no pueden tener un cero a la izquierda, es decir, 04 --> 4
			por lo que la primera "row" quedaria siempre vacia
		*/
		$('.row').each(function(index, element) {
			for(var y=0; y<10; y++)
				if(index!=0)
					$(element).append('<div id="' + index + y + '" class="square">' + index + y + '</div>');
				else
					$(element).append('<div id="' + y + '" class="square">' + index + y + '</div>');
		});

		fillSquares();
	});