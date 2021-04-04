/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}

4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

<<<<<<< Updated upstream
// 1.

// let i = 0;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// // 2. 

// Вариант 1
// const items = ['мяч', 'мяч', 'обувь', 'футболка', 'шорты'], prices = [30, 35, 60, 40, 30]
// const basket = [items, prices] // предполагаемая сущность корзины :)))?

// function countBasketPrice(basket) {
//     let sum = 0;
//     for (i = 0; i < basket[1].length; i++) {
//         sum += basket[1][i]
//     }
//     return sum;
// }

// console.log('Товаров в корзине на сумму: ' + countBasketPrice(basket))
=======
// 1. Упустил, что простые нужны числа. Переделал

function primeNum(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let i = 0;

while (i < 100) {
    if (primeNum(i)) {
        console.log(i);
    }
    i++;
}

// // 2. 

// Вариант 1 - убираем значит
>>>>>>> Stashed changes

// // Вариант 2
// const itemCard1 = ['мяч', 30];
// const itemCard2 = ['мяч', 35];
// const itemCard3 = ['обувь', 60];
// const itemCard4 = ['футболка', 40];
// const itemCard5 = ['шорты', 30];
// const basket = [itemCard1, itemCard2, itemCard3, itemCard4, itemCard5,] // сущность корзины

// function countBasketPrice(basket) {
//     let sum = 0;
//     for (i = 0; i < basket.length; i++) {
//         sum += basket[i][1]
//     }
//     return sum;
// }

// console.log('Товаров в корзине на сумму: ' + countBasketPrice(basket))

// // 3.

// for (let i = 0; i < 10; console.log(i), i++) { }

// // 4.

// for (let i = 1, x = 'x'; i <= 20; console.log(x), x += 'x', i++) { }