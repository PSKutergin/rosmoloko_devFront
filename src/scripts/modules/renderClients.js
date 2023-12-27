import getData from "./getData";
import sliderClienst from './sliderClients';

const renderClients = (url) => {
    const clientsList = document.getElementById('clients-list');

    clientsList.innerHTML = '';

    const renderData = (items) => {
        items.forEach(item => {

            clientsList.insertAdjacentHTML('beforeend',
                `
                    <li class="splide__slide clients-slider__item">
                        <img src="${item.client_image}" alt="Окей">
                    </li>
                `)
        })

        sliderClienst();
    };

    getData(url)
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.log(error.message);
        })

};

export default renderClients;