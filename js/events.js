function fillSquares() {
	var filledSquares = [];

	while(fillableSquares != 0) {
		randomSquare = Math.floor(Math.random() * 100);
		randomType = Math.floor(Math.random() * 2);

		/*
			comprueba que el numero generado no se ha elegido anteriormente
			en el caso de que haya salido, se envia al caso default para generar otro numero
		*/
		if(filledSquares.indexOf(randomSquare) == -1)
			filledSquares.push(randomSquare);
		else
			randomType = "default";

		
		switch(randomType) {
		    case 0:
		    	if(filledGreen < totalGreenSquares) {
		    		$('#' + randomSquare).addClass("green");
		    		filledGreen++;
		    		fillableSquares--;
		    		break;
		    	}
		    	else
		    		break;			        

	        case 1:
		        if(filledBlue < totalBlueSquares) {
		        	$('#' + randomSquare).addClass("blue");
		        	filledBlue++;
		        	fillableSquares--;
		        	break;
		        }
		        else
		        	break;	

		    default:
		        //console.log("default");
		}

	}


	//añade una clase a las casillas vacias
	for(var aux=0; aux<100; aux++) {
		if($('#' + aux).hasClass("green") || $('#' + aux).hasClass("blue")){}
		else
			$('#' + aux).addClass("none");
	}


	$('.blue, .green').click(function() {
		if(clicked) {
			clicked = false;
			globalStatus = false;
		}
		if(globalStatus==true) {
			clicked = true;
		}
		else {}
	});

	$('.blue, .green').mouseover(function() {
		if($(this).hasClass('blue') == true)
			color = 'blue';
			
		if($(this).hasClass('green') == true)
			color = 'green';

		console.log(color);
		if(!$(this).hasClass('none')) {
			if(!clicked) {
				findNeighbors($(this).attr('id'), color);
				$(this).addClass('hovered');
			}
		}
	});

	//elimina el estilo de ayuda para mover la ficha
	$('.blue, .green').mouseout(function() {
		if(clicked==true) {}
		else {
			$('.square').each(function(index, element) {
				if($(this).hasClass('green') == true || $(this).hasClass('blue') == true) {}
				else {
					$(this).removeClass('pink');
				}
			});
			$('.square').removeClass('hovered');
			globalStatus = false;
		}
	});
}