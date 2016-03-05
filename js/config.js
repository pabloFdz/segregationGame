		totalSquares = 100;
		
		pctGreen = 60;
		openSquares = 30;

		filledGreen = 0;
		filledBlue = 0

		fillableSquares = totalSquares - openSquares;
		totalGreenSquares = fillableSquares * pctGreen / 100;
		totalBlueSquares = fillableSquares - totalGreenSquares;

		globalStatus = false;
		clicked = false;


		config = {
			greenNeighbors: 3,
			blueNeighbors: 3
		};