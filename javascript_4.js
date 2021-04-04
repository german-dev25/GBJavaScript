/*

1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
но в разных местах давал возможность вызывать разные методы.

*/


// 1.

// function numToObject(number) {
//     if (number > 0 && number < 999 && Number.isInteger(number)) {
//         return console.log({
//             'единицы': number % 10,
//             'десятки': Math.floor(number / 10) % 10,
//             'сотни': Math.floor(number / 100),
//         });
//     }

//     console.log('Нужно ввести число от 0 до 999');
//     return {};
// };

// numToObject(432);

// // 2.


// const basket = {
//     products: [
//         {
//             productId: 500,                                 // id
//             productName: 'Мяч',                             // название
//             productPhoto: ['id500_ball_preview.jpg'],       // изображение продукта
//             productPrice: 450,                              // цена товара
//             productStockBalance: 'info_from_php_and_sql',   // остаток на складе ??
//             quantity: 2,                                    // количество
//         },
//         {
//             productId: 300,
//             productName: 'Обувь',
//             productPhoto: ['id300_shoes_preview.jpg'],
//             productPrice: 6000,
//             productStockBalance: 'info_from_php_and_sql',
//             quantity: 1,
//         },
//         {
//             productId: 140,
//             productName: 'Футболка',
//             productPhoto: ['id140_t-shirt_preview.jpg'],
//             productPrice: 1000,
//             productStockBalance: 'info_from_php_and_sql',
//             quantity: 3,
//         }
//     ],

//     countBasketPrice() {
//         let basketPrice = 0;
//         for (let i = 0; i < this.products.length; i++) {
//             basketPrice += this.products[i].productPrice * this.products[i].quantity
//         }
//         return basketPrice;
//     },

// }

// console.log('Общая сумма: ' + basket.countBasketPrice());



/**
 *  3. решил попробовать реализовать отдельные сущности
 * Купоны + Доставка + Товары для последующей реализации их в т.ч. в корзине
 * и из сущности в сущность свойства и методы перенести
 * интересно было попробовать сделать так =))))
 */

// упрощенная сущность "пользователя" и "заказа"

class Users {
    constructor(userId, userAddress, birthday, orders, activeCoupon) {
        this.userId = userId;
        this.userAddress = userAddress;
        this.birthDay = birthday;
        this.orders = orders;
        this.activeCoupon = activeCoupon;
    }
}

class Order {
    constructor(orderId, shopList, delivery) {
        this.orderId = orderId;
        this.shopList = shopList;
        this.delivery = delivery;
    }
}

/**
 * Товары **
 * Описание основных характеристик + id товара
 * Методы: 
 * getStopSale - отключить возможность положить в корзину, если Balance = 0
 * getFinalPrice - итоговая цена с учетом скидки
 * getSalePercent - метод, переводящий двоичное число в % (0.1 => 10%) для отображения на сайте
 * setDiscountLabel - установка лейбла на товаре о скидке
 * setBalance - остато товара (сейчас по умол 1)
 * setFinalPrice - цена со скидкой
 */

class Product {
    constructor(id, name, description, color, photo, price, rating, discount) {
        this.productId = id;
        this.productName = name;
        this.description = description;
        this.color = color;
        this.productPhoto = photo;
        this.productPrice = price;
        this.rating = rating;
        this.discount = discount;
        this.productStockBalance = this.setBalance;
        this.productFinalPrice = this.getFinalPrice;
        this.productDiscountLabel = this.setDiscountLabel;
    }

    getStopSale() {
        if (this.productStockBalance == 0) {
            // moveToBasket == false;
            return 'Товар закончился';
        }
    }

    getSalePercent() {
        return (this.discount < 1 && this.discount >= 0) ? this.discount * 100 : this.discount;
    }

    getFinalPrice() {
        return this.productPrice - (this.productPrice * (this.getSalePercent() / 100));
    }

    setDiscountLabel() {
        return (this.discount > 0) ? 0 : -1;
    }

    setBalance() {
        // 'info_from_php_and_sql' ??
        return 1;
    }
}

const id_000_001 = new Product(000001,
    'Мяч',
    'Мяч неквадратный для игры в настольный теннис',
    ['зеленый', 'синий', 'красный'],
    ['id000001_1.jpg', 'id000001_2.jpg', 'id000001_3.jpg',],
    450,
    4.5,
    0.1)

const id_000_002 = new Product(000002,
    'Обувь',
    'Спортивная обувь с ортопедической стелькой',
    ['черный', 'белый'],
    ['id000002_1.jpg', 'id000002_2.jpg', 'id000003_3.jpg', 'id000004_3.jpg',],
    6000,
    4.8,
    0.0)

const id_000_003 = new Product(000003,
    'Футболка',
    'Футболка для пробежек и прогулок',
    ['оранжево-зеленая', 'сине-красная', 'бело-черная'],
    ['id000003_1.jpg', 'id000003_2.jpg', 'id000003_3.jpg', 'id000003_3.jpg',],
    3500,
    3.8,
    0.2)

/**
 * Купоны **
 * couponType - вид скидки (на "рублевый номинал" или "процент")
 * couponDiscount - сумма или % скидки
 * couponDate - срок "жизни" купона (дней)
 * couponStart - дата начала действия
 * getCouponInfo - информация о купоне
 * 
 * нереализованные методы (с Date не разобрался): 
    getCouponDateStart - дата начала действия купона (праздничные и др. события, а также ДР пользователя)
    getCountDown - отсчет до окончания действия купона
    хотел также реализовать, чтоб купон по датам автоматически Вкл/Выкл в корзине
    ну и он должен исчезать из списка действующих в корзине, в идеале
    и появляться при определенных услових (код купона или дата)
 *
 */

class Coupon {
    constructor(idCoupon, couponType, couponDiscount, couponDuration, secretCode, userInputCode) {
        this.idCoupon = idCoupon;
        this.status = this.couponActivate;
        this.couponType = couponType;
        this.couponDiscount = couponDiscount;
        this.couponDuration = couponDuration;
        this.secretCode = secretCode;
        this.userInputCode = userInputCode;
    }

    getCouponInfo() {
        if (this.couponType == 'percent') {
            return `Скидка по купону ${this.idCoupon} - ${this.couponDiscount * 100}%\nСрок действия - ${this.couponDuration} дней`;
        } else if (this.couponType == 'amount') {
            return `Скидка по купону ${this.idCoupon} - ${this.couponDiscount} руб.\nСрок действия - ${this.couponDuration} дней`;
        }
    }

    getCouponDateEnd() {
        if (this.couponActivate) {
            this.dateEndCoupon = dateToday + this.couponDuration;
        }
    }

    couponActivate() {
        return (this.userInputCode == this.secretCode) ? 0 : -1
    }
}

const blackFridayCoupon2021 = new Coupon('Черная пятница', 'percent', 0.1, 14, 'BF2021', '');
const happyBirthDay = new Coupon('С Днем Рождения', 'amount', 500, 30, 'HappyBirthday2021', 'HappyBirthday2021');

/**
 * Доставка
 */

class Delivery {
    constructor(deliveryId, deliveryPrice, deliveryTime) {
        this.deliveryId = deliveryId;
        this.deliveryPrice = deliveryPrice;
        this.deliveryTime = deliveryTime;
    }

    getFullDeliveryInfo() {
        return `Стоимость доставки ${this.deliveryId} - ${this.deliveryPrice} рублей. Срок доставки ${this.deliveryTime} дней`;
    }

    getDeliveryDate() {
        // return dateOfOrder + this.deliveryTime;
    }
}

// инициализурем службы доставки

const neYa = new Delivery('НеЯ.Плейс', 350, 5);
const nitrogen = new Delivery('Азот', 500, 3);
const homeberry = new Delivery('Клюква', 200, 5);
const pickUp = new Delivery('Самовывоз', 0, 3);

// тестовый заказ и пользователь

const testOrder = new Order(0001, [id_000_001, id_000_002, id_000_002, id_000_003], neYa);
const testUser = new Users(00001, 'Москва', '1989-03-25', testOrder, [blackFridayCoupon2021, happyBirthDay])

const basket = {
    products: testOrder.shopList,
    coupons: testUser.activeCoupon,
    delivery: testOrder.delivery,

    basketFullPrice() {
        let basketPrice = 0;
        for (product of this.products) {
            basketPrice += product.productPrice;
        }
        return basketPrice;
    },

    discount() {
        let discount = 0;
        for (let i = 0; i < this.products.length; i++) {
            discount += this.products[i].productPrice * this.products[i].discount;
        }
        return -discount;
    },

    coupon() {
        let amountOfCoupon = 0;
        for (let i = 0; i < this.coupons.length; i++) {
            if (this.coupons[i].status()) {
                if (this.coupons[i].couponType === 'percent') {
                    amountOfCoupon += this.basketFullPrice() * this.coupons[i].couponDiscount;
                } else if (this.coupons[i].couponType === 'amount') {
                    amountOfCoupon += this.coupons[i].couponDiscount;
                }
            }
        }
        return -amountOfCoupon;
    },

    countBasketPrice() {
        return this.basketFullPrice() + this.discount() + this.coupon();
    },

}

console.log(`Общая сумма в корзине: ${basket.basketFullPrice()}`);
console.log(`Сумма скидок: ${basket.discount()}`);
console.log(`Сумма купонов: ${basket.coupon()}`);
console.log(`Сумма с учетом скидок: ${basket.countBasketPrice()}`);
console.log(`Информация о доставке\n${basket.delivery.getFullDeliveryInfo()}`);
console.log(`Сумма с учетом скидок и доставки: ${basket.countBasketPrice() + basket.delivery.deliveryPrice}`);
