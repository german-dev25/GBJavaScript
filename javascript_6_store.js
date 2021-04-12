// каталог товаров
const catalog = {
    catalogBlock: null,
    cart: null,

    // товары каталога
    list: [
        {
            id_product: 000001,
            product_name: 'Мяч',
            price: 450,
        },
        {
            id_product: 000002,
            product_name: 'Обувь спортивная',
            price: 6000,
        },
        {
            id_product: 000003,
            product_name: 'Футболка',
            price: 3500,
        }
    ],

    // создание (инициализация) каталога
    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    // рендерим каталог
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    // собвтие каталога (добавление в корзину)
    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    // метод для добавления
    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const idProduct = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === idProduct);
        this.cart.addToBasket(productToAdd);
    },

    // узнаем количество
    getCatalogListLength() {
        return this.list.length;
    },

    // выводим список каталога
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    // вывод карточки товара
    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
    },

    // пусьтой каталог без товаров
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст';
    },
};

// корзина
const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [
        {
            id_product: 000001,
            product_name: 'Мяч',
            price: 450,
            quantity: 5,
        },
    ],

    // инициализация корзины
    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    // обработка событий корзины
    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    // очистка корзины
    dropCart() {
        this.goods = [];
        this.render();
    },

    // врендерим корзину
    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    // добавляем товар в корзину
    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find(({id_product}) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка!');
        }
    },

    // считаем количество товара в корзине
    getCartGoodsLength() {
        return this.goods.length;
    },

    // рендер пустой корзины
    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    // рендер корзины с товарами
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    // рендер карты товара в корзине
    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
