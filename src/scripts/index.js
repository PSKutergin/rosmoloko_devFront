import '@splidejs/splide/css';
import '../styles/animate.css'
import '../scss/style.scss';

import WOW from 'wow.js';
import menuModal from './modules/menuModal';
import renderGoods from './modules/renderGoods';
import sliderGoods from './modules/sliderGoods';
import renderClients from './modules/renderClients';

const urlProducts = 'http://127.0.0.1:8000/api/v1/products/'
const urlClients = 'http://127.0.0.1:8000/api/v1/clients/'

new WOW().init();

menuModal();
if (!window.location.pathname.includes('about/index.html')) {
    renderGoods(urlProducts);
    sliderGoods(urlProducts);
    renderClients(urlClients);
}