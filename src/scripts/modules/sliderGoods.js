import getData from "./getData";

const sliderGoods = (url) => {
    const productsSlider = document.querySelector('.products-slider');
    const productsSliderContainer = productsSlider.querySelector('.products-slider__items');
    const goodsList = document.getElementById('goods-list');
    const timeInterval = 4000;

    let goods;
    let currentSlide = 0;
    let interval;

    const autoSlide = () => {
        const listGoods = Array.from(document.querySelectorAll('.products-list__item'));

        let currentSlide = listGoods.findIndex(item => item.classList.contains('active'));
        currentSlide++

        if (currentSlide >= listGoods.length) {
            currentSlide = 0
        };

        slider(goods, currentSlide);
    };

    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    const slider = (goods, numbersSlides) => {
        const listGoods = document.querySelectorAll('.products-list__item');

        listGoods.forEach((item, index) => {
            index === numbersSlides ? item.classList.add('active') : item.classList.remove('active');
        });

        productsSliderContainer.innerHTML = '';
        productsSliderContainer.insertAdjacentHTML('beforeend',
            `
                <li class="products-slider__item">
                    <div class="products-slider__item-info" data-key="${goods[numbersSlides].id}">
                        <h2 class="products-slider__item-title">${goods[numbersSlides].name}</h2>
                        <p class="products-slider__item-text">${goods[numbersSlides].description}</p>
                        <button class="products-slider__item-btn button">Узнать подробнее</button>
                    </div>
                    <div class="products-slider__item-img">
                        <img src="${goods[numbersSlides].imageBig}" alt="Молоко">
                    </div>
                </li>
            `
        )
    };

    productsSlider.addEventListener('click', (e) => {
        e.preventDefault();

        const listGoods = Array.from(document.querySelectorAll('.products-list__item'));

        let currentSlide = listGoods.findIndex(item => item.classList.contains('active'));

        if (e.target.closest('.arrow-left')) {
            currentSlide--
        };
        if (e.target.closest('.arrow-right')) {
            currentSlide++
        };

        if (currentSlide >= listGoods.length) {
            currentSlide = 0
        };
        if (currentSlide < 0) {
            currentSlide = listGoods.length - 1
        };

        slider(goods, currentSlide);
    });

    productsSlider.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.arrow-btn') || e.target.matches('.products-slider__item-btn')) {
            stopSlide()
        };
    }, true);

    productsSlider.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.arrow-btn') || e.target.matches('.products-slider__item-btn')) {
            startSlide(timeInterval)
        };
    }, true);

    goodsList.addEventListener('click', (e) => {
        e.preventDefault();

        const listGoods = Array.from(document.querySelectorAll('.products-list__item'));

        if (e.target.closest('.products-list__item')) {
            listGoods.forEach(item => item.classList.remove('active'));

            if (e.target.classList.contains('products-list__item')) {
                e.target.classList.add('active');

                listGoods.forEach((item, index) => {
                    if (item == e.target) slider(goods, index);
                });
            } else {
                e.target.parentElement.classList.add('active');

                listGoods.forEach((item, index) => {
                    if (item == e.target.parentElement) slider(goods, index);
                });
            }
        }
    });

    goodsList.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.products-list__item')) {
            stopSlide()
        };
    }, true);

    goodsList.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.products-list__item')) {
            startSlide(timeInterval)
        };
    }, true);

    getData(url)
        .then(data => {
            goods = data;
            slider(goods, currentSlide);
            startSlide(timeInterval);
        })
        .catch(error => {
            console.log(error.message);
        })

};

export default sliderGoods;