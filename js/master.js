function findNeighbors(id, color) {
	var aux1, aux2, aux3, aux4, aux5, aux6, aux7, aux8;
	var cont = 0;

	var ids = [id - 11, id - 10, id - 9, parseInt(id) + 1, id - 1, parseInt(id) + 9, parseInt(id) + 10, parseInt(id) + 11];


	for(var count=0; count<8; count++) {
		if($('#' + ids[count]).hasClass(color)) {
			cont++;
		}
	}
	if(cont>=eval("config." + color + "Neighbors")) {
		console.log("este: "+id+" se queda");
	}
	else {
		globalStatus = true;
		$('.square').each(function(index, element) {
			if($(this).hasClass('green') == true || $(this).hasClass('blue') == true || $(this).hasClass('hovered') == true) {}
			else {
				var id = $(this).attr('id');
				var ids = [id - 11, id - 10, id - 9, parseInt(id) + 1, id - 1, parseInt(id) + 9, parseInt(id) + 10, parseInt(id) + 11];

				cont = 0;

				for(var count2=0; count2<8; count2++) {
					if($('#' + ids[count2]).hasClass(color)) {
						cont++;
					}
				}
				if(cont>=eval("config." + color + "Neighbors")) {
					$(this).addClass('pink');
				}
				activatePinks();

			}
		});
	}


	/*
		funcion necesaria ya que los elementos de la clase "pink" son dinamicos, por lo que cada vez
		que aparecen, se debe crear el eventListener
	*/
	function activatePinks() {
		$('.pink').click(function() {
			var color;

			if($('.hovered').hasClass('blue') == true)
				color = 'blue';
				
			if($('.hovered').hasClass('green') == true)
				color = 'green';
				
				$('.hovered').removeClass(color, 'hovered').addClass('none');
				$(this).removeClass('pink');
				$(this).removeClass('none');
				$(this).addClass(color);
				clicked = false;
		});
	}
}