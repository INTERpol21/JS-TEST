<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson-5. Task_1</title>
	<link rel="stylesheet" href="style_chb.css" />
</head>
<body>
	<div id="wrapper">
		<h1>Lesson-5. Task-1.</h1>
		<h3>Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
			Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
			нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.</h3>
		<div id="board">
			
		</div>
	</div>
	<script type="text/javascript" src="script_chb.js"></script>
</body>
</html>

function name(){
	const board = document.querySelector('#board');
	const letters = ['A','B','C','D','E','F','G','H'];
	for (var i = 0; i <= 9; i++) {
		var row = document.createElement('div');
		for (var j = 0; j <= 9; j++) {
			var col = document.createElement('div');
			row.append(col);
			if (i != 0 && i!= 9) {
				if (j != 0 && j != 9) {
					if (i % 2 == j % 2) {
						col.className = 'black';
					};
				};
			};
			if (i == 0 || i == 9) {
				if (j != 0 && j != 9) {
					col.textContent = j;
				};
			};
			if (j == 0 || j == 9) {
				if (i != 0 && i != 9) {
					col.textContent = letters[i-1];
				};
			};
			if (i == 0 || i == 9 || j == 0 || j == 9){
				col.className = 'wood';
			};
		};
		board.append(row);
		row.className = 'outer';
	};
	
};

name()