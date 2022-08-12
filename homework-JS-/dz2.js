// Задача 1. Почему код даёт именно такие результаты? 

var a = 1, b = 1, c,b;

c = ++a; alert(c); //2 к переменной а прибавляем единицу
d = b++; alert(d); //1 Инкремент. Увелечение операнда на шаг в единицу 
с = (2+ ++a); alert(c); //5 К 2 прибавляем +3, осюда и ответ 5 
d = (2+ b++); alert(d); //4 во втором примере +1, В этом примере еще +1, но выводим предыдузее значение(2), отсюда получаем 4

alert(a); //3   +1 в примерах 1 и 3 
alert(b); //3   +1 в примерах 2 и 4 


// Задача 2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *=2 ); // полностью выражение будет выглядить как: x = 1 + (a = a * 2 )


//Задача 3.

var a = 5;
var b = 3;
if(a > 0 && b > 0){
    x = a - b;
    alert(x);
} else if(a < 0 && b < 0){
    x = a * b;
    alert(x);
} else if (a < 0 && b < 0 || a < 0 && b > 0 ){
    x = a + b;
    alert(x);
}



//  Задача 4.


a = +prompt ('Введите число от 1 до 15');
switch (a) {
    case 1:
        alert('Ваше число 1');
        break;

    case 2:
        alert('Ваше число 2');
        break;

    case 3:
        alert('Ваше число 3');
        break;

    case 4:
        alert ( 'Ваше число 4');
        break;
    case 5:
        alert ( 'Ваше число 5');
        break;
    case 6:
        alert ( 'Ваше число 6');
        break;
    case 7:
        alert ( 'Ваше число 7');
        break;
    case 8:
        alert ( 'Ваше число 8');
        break;
    case 9:
        alert ( 'Ваше число 9');
        break;
    case 10:
        alert ( 'Ваше число 10');
        break;
    case 11:
        alert ( 'Ваше число 11');
        break;
    case 12:
        alert ( 'Ваше число 12');
        break;
    case 13:
        alert ( 'Ваше число 13');
        break;
    case 14:
        alert ( 'Ваше число 14');
        break;
    case 15:
        alert ( 'Ваше число 15');
        break;
    }



// Задача 5. 

var a = 2;
var b = 3;

function plus(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function div(a,b){
    return a / b;
}

function mult(a,b){
    return a * b;
}


// Задача 6.

function math(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            return arg1 + arg2;
            break;
        case 2:
            return arg1 - arg2;
            break;
        case 3: 
            return arg1 / arg2;
            break;
        case 4:
            return arg1 * arg2;
            break;
    }
    
}