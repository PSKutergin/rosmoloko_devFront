import '@splidejs/splide/css';
import '../styles/animate.css'
import '../scss/style.scss';

import WOW from 'wow.js';
import sliderClienst from './modules/sliderClients';
import menuModal from './modules/menuModal';
import renderGoods from './modules/renderGoods';
import sliderGoods from './modules/sliderGoods';

const url = './db/goods.json';

new WOW().init();

menuModal();
if (!window.location.pathname.includes('about/index.html')) {
    sliderClienst();
    renderGoods(url);
    sliderGoods(url);
}