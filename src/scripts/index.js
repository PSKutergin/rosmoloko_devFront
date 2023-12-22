import '@splidejs/splide/css';
import '../scss/style.scss';


import sliderClienst from './modules/sliderClients';
import menuModal from './modules/menuModal';
import renderGoods from './modules/renderGoods';
import sliderGoods from './modules/sliderGoods';

const url = './db/goods.json';

sliderClienst();
menuModal();
renderGoods(url);
sliderGoods(url);