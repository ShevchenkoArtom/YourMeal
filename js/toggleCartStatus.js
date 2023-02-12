function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartIsEmpty = document.querySelector('.cartisempty');
    let quanity = document.querySelector('[data-counter]');
    const cartFooter = document.querySelector('.cart-bottom');
    const cartWidth = document.querySelector('.section-cart');

    if (cartWrapper.children.length > 0) {
        cartIsEmpty.classList.add('notEmpty');
    } else {
        cartIsEmpty.classList.remove('notEmpty');
    }
    
    if (cartWrapper.children.length > 0) {
        quanity.innerText= parseInt(cartWrapper.children.length); 
        cartFooter.classList.remove('none');
        cartWidth.classList.remove('none')
    } else {
        quanity.innerText = 0;
        cartFooter.classList.add('none');
        cartWidth.classList.add('none')
    }


};