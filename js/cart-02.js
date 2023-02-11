const cartWrapper =  document.querySelector('.cart-wrapper');

window.addEventListener('click', function(event){

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card')
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card-pic2').getAttribute('src'),
            title: card.querySelector('.card-name').innerText,
            // itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.card-weight').innerText,
            price: card.querySelector('.card-price').innerText,
            // counter: card.querySelector('[data-counter]').innerText,
            counter: 1,
        };


        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
            // document.querySelector('cartisempty').classList.add('notEmpty');
            // console.log(this.document.querySelector('cartisempty').classList.add('notEmpty'))
        } else {
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
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        };


        toggleCartStatus();

        
        // card.querySelector('[data-counter]').innerText = 1;
    };
});