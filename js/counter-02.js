// // Добавляем прослушку на всем окне
// window.addEventListener('click', function(event){
//     // Проверяем является ли элемент по которомы был совершен клик кнопкой +
//     if (event.target.dataset.action === 'plus') {
        
//         // Находим обертку счётчика
//         const counterWrapper = event.target.closest(".cart-card-setting");
//         console.log(counterWrapper);

//         // Находим див с числом счетчика
//         const counter = counterWrapper.querySelector('[data-counter]');
//         counter.innerText = ++counter.innerText;
//     }

//     // Проверяем является ли элемент по которомы был совершен клик кнопкой -
//     if (event.target.dataset.action === 'minus') {
        
//          // Находим обертку счётчика
//         const counterWrapper = event.target.closest(".cart-card-setting");
//         console.log(counterWrapper);

//         // Находим див с числом счетчика
//         const counter = counterWrapper.querySelector('[data-counter]')
//         if (parseInt(counter.innerText) > 1) {
//             counter.innerText = --counter.innerText;
//         }
//     }
// });


// ОПТИМИЗАЦИЯ

// Добавляем прослушку на всем окне
window.addEventListener('click', function(event){
    let counter;
    // Проверяем клик строго по кнопкам + или -
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обертку счётчика
        const counterWrapper = event.target.closest(".cart-card-setting");
        // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем является ли элемент по которомы был совершен клик кнопкой +
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент по которомы был совершен клик кнопкой -
    if (event.target.dataset.action === 'minus') {
        // Проверка на товара который находится в корзине

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

        
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-card').remove();

            toggleCartStatus();

            calcCartPriceAndDelivery();
        }
    };


    // Проверка клика на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }
});