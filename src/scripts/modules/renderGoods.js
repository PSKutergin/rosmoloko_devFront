import getData from "./getData";

const renderGoods = (url) => {
    const goodsList = document.getElementById('goods-list');

    goodsList.innerHTML = '';

    const renderData = (items) => {
        items.forEach(item => {
            if (item.id === 0) {
                goodsList.insertAdjacentHTML('beforeend',
                    `
                    <li class="products-list__item active">
                        <img src="./src/assets/images/prodicts-list/${item.image}" alt="${item.name}">
                        <p>${item.name}</p>
                    </li>
                `)
            } else if (item.name.toLowerCase() === 'кисломолочные напитки') {
                goodsList.insertAdjacentHTML('beforeend',
                    `
                    <li class="products-list__item small">
                        <img src="./src/assets/images/prodicts-list/${item.image}" alt="${item.name}">
                        <p>${item.name}</p>
                    </li>
                `)
            } else {
                goodsList.insertAdjacentHTML('beforeend',
                    `
                    <li class="products-list__item">
                        <img src="./src/assets/images/prodicts-list/${item.image}" alt="${item.name}">
                        <p>${item.name}</p>
                    </li>
                `)
            }
        })
    };

    getData(url)
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.log(error.message);
        })

};

export default renderGoods;