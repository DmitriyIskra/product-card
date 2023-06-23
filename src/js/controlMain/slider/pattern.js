import './style-slider.css';

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
            const wraperSlide = document.createElement('li');
            wraperSlide.classList.add('slider__wraper-slide');

            const sliderImg = document.createElement('img');
            sliderImg.classList.add('slider__img');
            sliderImg.src = `${this.arrImg[i]}`;
            // console.log(sliderImg)
            wraperSlide.append(sliderImg);
            slideContainer.append(wraperSlide);
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
            navItem.id = `${i + 1}`;
            navigationList.append(navItem);
        }

        slider.append(slideContainer);
        slider.append(arrowLeft);
        slider.append(arrowRight);
        slider.append(navigationList);

        return slider;
    }

    patternZum() {

    }
}