function calcCartPriceAndDelivery () {
    const cartItems = document.querySelectorAll('.cart-card');
    const deliveryCost = document.querySelector('.freedelivery');

    let priceTotal = 0;
    let totalPriceEl = document.querySelector('.theprice');

    cartItems.forEach(function(item){
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.cart-card-price');
        const curentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        priceTotal += curentPrice;
    });

    totalPriceEl.innerText = 0 + priceTotal;

    if (parseInt(totalPriceEl.innerText) >= 599) {
        deliveryCost.classList.add('free')
    } else {
        deliveryCost.classList.remove('free')
    }
}