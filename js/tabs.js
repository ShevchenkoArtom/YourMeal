const headerItem = document.querySelectorAll('.category__slider-item');
const mainContent = document.querySelectorAll('.cards__inner');

for (let item of headerItem) {
    item.addEventListener('click', function(){

        for (let el of mainContent) {
            el.classList.add('hidden');
        }
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden');
    });
}