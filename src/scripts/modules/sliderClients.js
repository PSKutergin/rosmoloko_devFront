import Splide from '@splidejs/splide';
import { Intersection } from '@splidejs/splide-extension-intersection';

const sliderClienst = () => {
    const clientsSlider = new Splide('.splide', {
        type: 'loop',
        pagination: false,
        perPage: 5,
        perMove: 1,
        speed: 1000,
        drag: true,
        classes: {
            arrows: 'splide__arrows clients-slider-actions',
            arrow: 'splide__arrow arrow-btn',
            prev: 'splide__arrow--prev arrow-left',
            next: 'splide__arrow--next arrow-right',
        },
        autoplay: 'pause',
        intersection: {
            inView: {
                autoplay: true,
            },
            outView: {
                autoplay: false,
            },
        },
        breakpoints: {
            975: {
                perPage: 3,
            },
            589: {
                perPage: 1,
            },
        }
    });

    clientsSlider.mount({ Intersection });
}

export default sliderClienst