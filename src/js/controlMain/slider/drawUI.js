export default class DrawUISlider {
    constructor(container, pattern) { 
        if(typeof(container) === 'string') this.container = document.querySelector(container);
        this.pattern = pattern;

        this.slider = null;
        // this.zum = this.container.querySelector('.zum'); // .......
    }

    // отрисовка слайдера
    rendering() {
        // сохраняем собранный слайдер
        const patternSlider = this.getPatternSlider();

        // ставим слайдер в контейнер
        this.container.append(patternSlider);

        this.slider = this.container.querySelector('.slider');
    }

    // получаем собранный слайдер
    getPatternSlider() {
        let widthContainer

        // получаем собранный слайдер
        return this.pattern.patternSlider();
    }

    // получаем собранный зум
    getPatternZum() {

    }
}