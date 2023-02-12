const cartWrapper =  document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event){
    // Проверяю, что клик был совершён по кнопке "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {
        // Находим карточку с товаром внутри которой был совершён клик
        const card = event.target.closest('.card');
        
        // Собираем данные с этого товара и записываем их в объект productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-pic2').getAttribute('src'),
            title: card.querySelector('.card-name').innerText,
            // itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.card-weight').innerText,
            price: card.querySelector('.card-price').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        const cartItemHTML = `<div class="cart-card" data-id="${productInfo.id}">
                                <img src="${productInfo.imgSrc}" alt="" class="cart-pic">
                                <div class="about-good">
                                    <h4 class="cart-card-title">${productInfo.title}</h4>
                                    <p class="cart-card-weight">${productInfo.weight}</p>
                                    <p class="cart-card-price">${productInfo.price}</p>
                                </div>
                                <div class="cart-card-setting">
                                    <button class="cart-card-minus" data-action="minus">-</button>
                                    <p class="cart-card-quanity" data-counter>${productInfo.counter}</p>
                                    <button class="cart-card-minus cart-card-plus" data-action="plus">+</button>
                                </div>
                            </div>`;

        // Отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    };
});