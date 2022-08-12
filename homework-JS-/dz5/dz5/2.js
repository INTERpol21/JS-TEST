<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson-5. Task_2.</title>
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<div id="wrapper">
		<h1>Lesson-5. Task-2.</h1>
		<h3>Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:<br>
		— Пустая корзина должна выводить строку «Корзина пуста»;<br>
		— Наполненная должна выводить «В корзине: n товаров на сумму m рублей».</h3>
	
		<div id="main">
			
		</div>
	</div>
	<script type="text/javascript" src="script.js"></script>

</body>
</html>


const main = document.querySelector('#main');

let shoppingCart = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

function Item(product, image, price, quantity) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.price = price;
    this.quantity = quantity
}

shoppingCart.push(
    new Item('product_name_1', 'Image1', 95, 2)
);
shoppingCart.push(
    new Item('product_name_2', 'Image2', 17, 5)
);
shoppingCart.push(
    new Item('product_name_3', 'Image3', 15, 6)
);
shoppingCart.push(
    new Item('product_name_4', 'Image4', 32, 1)
);
shoppingCart.push(
    new Item('product_name_5', 'Image5', 22, 3)
);


// выводим перечень товаров в корзине, если корзина не пуста
if (shoppingCart == 0) {
	main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBasket}</div>`);
} else {
	for (const iterator of shoppingCart) {
        main.insertAdjacentHTML('beforeend', 
        `<div class="prod_item">
        <span>Товар - ${iterator.product}</span> 
        <span>Цена товара - ${iterator.price} руб</span>
        <span>Количество - ${iterator.quantity}</span>
        <span><img src="${iterator.image}"></span>
        </div>`);
    }
}

// возвращает итоговую сумму
function finalChart(shoppingCart) {
	return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + shoppingCart.quantity
    }, 0)
};

// возвращает итоговое количество
function finalCost(shoppingCart) {
    return shoppingCart.reduce( function (acc, shoppingCart){
        return acc + (shoppingCart.price * shoppingCart.quantity)
    }, 0)
};

// выводим итоговое количество и сумму
if (shoppingCart != 0) {
    const totalPrice = main.insertAdjacentHTML('beforeend', 
    `<hr><div class="prod_item total">В корзине: ${finalChart(shoppingCart)} товаров на сумму 
    ${finalCost(shoppingCart)} рублей</div>`);
}