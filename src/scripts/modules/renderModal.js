import getData from "./getData";

const renderModal = (url) => {
    const productsContainer = document.querySelector('.products-slider__items');
    const modal = document.getElementById('popup');
    const productModalBlock = modal.querySelector('.popup-product');

    let goods

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.closest('.popup-close')) {
            modal.classList.add('hide');
        }
    })

    productsContainer.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('.products-slider__item-btn')) {
            const goodId = +e.target.parentNode.dataset.key;
            const good = goods.find(item => item.id === goodId);

            productModalBlock.innerHTML = '';
            productModalBlock.insertAdjacentHTML('beforeend',
                `
                    <h3 class="popup-product-title">${good.name}</h3>
                    <section class="popup-product-description">${good.modal_description}</section>
                `)

            modal.classList.remove('hide');
        }
    })


    getData(url)
        .then(data => {
            goods = data;
        })
        .catch(error => {
            console.log(error.message);
        })

}

export default renderModal;