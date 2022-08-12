<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson-6.</title>
	<link rel="stylesheet" href="style.css" />
</head>
<body>
	<div id="wrapper">
		<h1>Lesson-6.</h1>
		<h3><b>Task-1.</b> Продолжаем реализовывать модуль корзины:<br>
		— Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без
		перезагрузки страницы;<br>
		— Привязать к событию покупки товара пересчет корзины и обновление ее внешнего
		вида.<br>
		<b>Task-2*.</b> У товара может быть несколько изображений. Нужно:<br>
		— Реализовать функционал показа полноразмерных картинок товара в модальном окне;<br>
		— Реализовать функционал перехода между картинками внутри модального окна.</h3>
	
		<div id="catalog"></div>
		<footer id="basket"></footer>
		<div id="popup"></div>
	</div>
	<script type="text/javascript" src="script.js"></script>

</body>
</html>


// создаем объект каталога
function Item(product, image, description, price, discount=0) {
    this.product = product;
    this.image = `img/${image}.png`;
    this.description = description;
    this.price = price;
    this.discount = discount
}

let catalodList = []

catalodList.push(new Item('Lloyd', 'Image1', 'Make a BIG impression', 95, 20));
catalodList.push(new Item('Djay', 'Image2', 'Has a removable, fabric robe', 17));
catalodList.push(new Item('Zein', 'Image3', 'Individual sets of building', 15));
catalodList.push(new Item('Kai', 'Image4', 'Components are dropped', 32, 10));
catalodList.push(new Item('Master Voo', 'Image5', 'Models carry brick-built', 22));
catalodList.push(new Item('Mech', 'Image6', 'The perfect building toys for kids', 22));

// создаем отображение каталога
function drowItems() {
    catalodList.forEach(function (item, i) {
        drowItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drowItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend', 
    `<div id="item-${id}" class="prod_item">
        <div class="item">
            <div class="image"><img src="${item.image}"></div>
            <div class="description"><h4>${item.product}</h4>${item.description}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <div data-id="${id}" class="button">В корзину</div>
        </div>
    </div>`);
}
drowItems(catalodList);


// ----------- создаем объект корзины -----------
let shoppingCart = [];

// ----------- руками для теста напихаем -----------
// shoppingCart.push(new basketItem('product_name_1', 10, 10));
// shoppingCart.push(new basketItem('product_name_2', 5));
// shoppingCart.push(new basketItem('product_name_3', 15));
// -------------------------------------------------

let emptyBasket = 'Ваша корзина пуста.';

function basketItem(product, price, discount=0) {
    this.product = product;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function() {
        if (this.discount != 0) {
            return this.price - this.price*this.discount/100;
        } else {
            return this.price;
        }
    }
}

// получаем итоговую сумму
function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.finalPrice();
    }, 0);
}

// так по приколу, правильные окончания
function correctEnding (){
    let corEnd = '';
    if (shoppingCart.length == 1) {
        corEnd = '';
    } else if (shoppingCart.length > 1 && shoppingCart.length <= 4) {
        corEnd = 'а';
    } else {
        corEnd = 'ов';
    }
    return corEnd;
}

// создаем отображение корзины
function drowTotal (shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyBasket}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p>В корзине: ${shoppingCart.length} 
            товар${correctEnding()} на сумму ${totalSumm(shoppingCart)} рублей.</p>
            <a class="buy" href="#">Купить</a>
        </div>`);
    }
}
drowTotal(shoppingCart);

// событие - добавление объекта в корзину
$catalog.addEventListener('click', function (e) {
    if (e.target.className ==='button' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalodList[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));

        drowTotal(shoppingCart);
    } 
});
 
// работаем с #popup
const $popup = document.querySelector('#popup');

$popup.addEventListener('click', function(e) {
    $popup.style.display = 'none';
});

 $catalog.addEventListener('click', function(e) {
    if( e.target.tagName === 'IMG' ) {
        $popup.textContent = '';
        $popup.style.display = 'flex';
        $popup.insertAdjacentHTML('beforeend',
            `<img src="${e.target.getAttribute('src')}" class="scale">`);
    }
});