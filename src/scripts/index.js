import '@splidejs/splide/css';
import '../styles/animate.css'
import '../scss/style.scss';

import WOW from 'wow.js';
import menuModal from './modules/menuModal';
import renderGoods from './modules/renderGoods';
import sliderGoods from './modules/sliderGoods';
import renderModal from './modules/renderModal'
import renderClients from './modules/renderClients';

const url = 'http://127.0.0.1:8000/api/v1/'

new WOW().init();

menuModal();
if (!window.location.pathname.includes('about/index.html')) {
    renderGoods(url + 'products/');
    sliderGoods(url + 'products/');
    renderModal(url + 'products/')
    renderClients(url + 'clients/');
}