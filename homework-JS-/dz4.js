

var number;
var obj={единицы: 0, десятки: 0, сотни: 0};

number = prompt("Введите число от 0 до 999!", 0);
if (number > 999) {
    obj={};
    console.log("Число превышает 999", obj);
} 
else if (number >= 0 && number.length>0) {
    switch (number.length) {
      case 3:
        obj.сотни = parseInt(number[number.length-3]);
      case 2:
        obj.десятки = parseInt(number[number.length-2]);
      case 1:
        obj.единицы = parseInt(number[number.length-1]);
        break;
      default: // Если пользователь введет, например: 123.5 / оно удовлетворяет нашим условиям, поэтому считаем:
        obj.единицы = parseInt(number[2]);
        obj.десятки = parseInt(number[1]);
        obj.сотни = parseInt(number[0]);
      }
      console.log("Объект", obj);
}
else 
    console.log("Неверно введено число");


//---------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script>
		
		/*
		
		Продолжить работу с интернет-магазином:
			a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
			b. Реализуйте такие объекты.
			c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
		*/
		
		function countBasketPrice (arr) {
			var sum = 0;

			for(var i = 0; i < arr.length; i++) {
				/*
				console.log('Сумма: ' + sum);
				console.log('Цена: ' + arr[i].price);
				console.log('Кол-во: ' + arr[i].pcs);
				*/
				sum += arr[i].price * arr[i].pcs;
			}
			return sum;
			
			return sum;
		}
		
		var productID_0 = {productName:'футболка', type:1, price:1250, brand:'Zara', pcs:2};
		var productID_1 = {productName:'толстовка', type:2, price:2250, brand:'Polo', pcs:1};
		var productID_2 = {productName:'штаны', type:6, price:1750, brand:'H&M', pcs:3};
		
		var basket = [];
		
		basket.push(productID_0);
		basket.push(productID_1);
		basket.push(productID_2);
		
		console.log('Сумма товаров в корзине: ' + countBasketPrice(basket));
		
	</script>
</head>
<body>
	
</body>
</html>
