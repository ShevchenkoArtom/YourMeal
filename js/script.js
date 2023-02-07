// // document.getElementsByClassName("assortment__slider");
// // document.addEventListener('touchstart', handleTouchStart, false);
// // document.addEventListener('touchmove', handleTouchMove, false);

// // const logBlock = document.querySelector('.assortment__slider-item');

// // let x1 = null;
// // let y1 = null;

// // function handleTouchStart(event) {
// //     const firstTouch = event.touches[0];
// //     x1 = firstTouch.clientX;
// //     y1 = firstTouch.clientY;
// //     // console.log (x1, y1);
// // }
// // function handleTouchMove(event) {
// //     if (!x1 || !y1) {
// //         return false;
// //     };
// //     let x2 = event.touches[0].clientX;
// //     let y2 = event.touches[0].clientY;
// //     // console.log(x2, y2);
// //     let xDiff = x2 - x1;
// //     let yDiff = y2 - y1;
// //     // console.log(xDiff, yDiff);
// //     if (Math.abs(xDiff)> Math.abs(yDiff)){
// //         // r - l
// //         if (xDiff > 0) logBlock.textContent = ('right');
// //         else logBlock.textContent = ('left');
// //     }
// //     else {
// //         //  t - b
// //         if (yDiff > 0) logBlock.textContent = ('down');
// //         else logBlock.textContent = ('top');
// //     }
// //     x1 = null;
// //     y1 = null;
// // }


// // // document.addEventListener('touchstart', handleTouchStart, false);






// // SLIDER

// let position = 0;
// const slidesToShow = 2;
// const slidesToScroll = 1;
// const container = document.querySelector('.assortment__slider-container');
// const track = document.querySelector('.assortment__slider-track');
// // const item = document.querySelector('.assortment__slider-item');
// const btnPrev = document.querySelector('.btn-sldier-prev');
// const btnNext = document.querySelector('.btn-slider-next');
// const items = document.querySelectorAll('.assortment__slider-item');
// const itemsCount = items.length;
// const itemWidth = container.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
//     item.getElementsByClassName.minWidth = `{itemWidth}px`;
// });

// btnNext.addEventListener('click', () => {
//     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// }); 

// btnPrev.addEventListener('click', () => {
//     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// }); 


// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`;
// };
// const checkBtns = () => {
//     btnPrev.disabled = position === 0; 
//     btnNext.disabled = position + -(itemsCount - slidesToShow) * itemWidth;
// };

// checkBtns();


