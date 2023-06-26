import './style-slider.css';

// import img1 from './img/img_slider_1.png';

export default class Pattern {
    constructor(arrImg) {
        this.arrImg = arrImg;
    }

    patternSlider(withContainer) {
        const slider = document.createElement('div');
        slider.classList.add('slider');

        const slideContainer = document.createElement('ul');
        slideContainer.classList.add('slider__slide-container');

        for(let i = 0; i < this.arrImg.length; i += 1) {
            const wrapperSlide = document.createElement('li');
            wrapperSlide.classList.add('slider__wrapper-slide');

            // ....... КОСТЫЛЬ
            wrapperSlide.classList.add(`backImg-${i + 1}`);
           // ....... КОСТЫЛЬ

            // const sliderImg = document.createElement('img');
            // sliderImg.classList.add('slider__img'); 
            // sliderImg.src = this.arrImg[i]; // ${this.arrImg[i]}
            // console.log(sliderImg)
            // wrapperSlide.append(sliderImg);
            slideContainer.append(wrapperSlide);
        }

        const arrowLeft = document.createElement('div');
        arrowLeft.classList.add('slider__arrow-left');

        const arrowRight = document.createElement('div');
        arrowRight.classList.add('slider__arrow-right');

        const navigationList = document.createElement('div');
        navigationList.classList.add('slider__navigation-list');

        for(let i = 0; i < this.arrImg.length; i += 1) {
            const navItem = document.createElement('li');
            navItem.classList.add('slider__navigation-item');
            navItem.setAttribute('data-point', `${i + 1}`);
            navigationList.append(navItem);
        }

        slider.append(slideContainer);
        slider.append(arrowLeft);
        slider.append(arrowRight);
        slider.append(navigationList);

        return slider;
    }
 
    patternZum() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('slider__wrapper-zum');

        const img = document.createElement('div');
        img.classList.add('slider__img-zum');

        const close = document.createElement('div');
        close.classList.add('slider__close-zum');
        close.textContent = 'CLOSE';

        wrapper.append(img);
        wrapper.append(close);

        return wrapper;
    }
}