export default class DrawUISlider {
    constructor(container, pattern) { 
        if(typeof(container) === 'string') this.container = document.querySelector(container);
        this.pattern = pattern;

        this.slider = null;
        this.slideContainer = null;
        this.pointNavigation = null;
        this.zum = null;

        this.widthSlider = null;
        this.counter = this.pattern.arrImg.length;
        this.lastNavPoint = null;
        this.counterPoint = 1;
        this.marginLeft = 0;
    }

    // отрисовка слайдера
    rendering() {
        // сохраняем собранный слайдер
        const patternSlider = this.getPatternSlider();

        // ставим слайдер в контейнер
        this.container.append(patternSlider);

        this.slider = this.container.querySelector('.slider');
        this.slideContainer = this.slider.querySelector('.slider__slide-container');
        this.pointNavigation = this.slider.querySelector('.slider__navigation-list');

        // находим и назначаем класс active поинту
        this.lastNavPoint = this.pointNavigation.querySelector(`[data-point="${this.counterPoint}"]`);
        this.lastNavPoint.classList.add('slider__navigation-item_active');
    }

    // получаем собранный слайдер
    getPatternSlider() {
        // получаем собранный слайдер
        return this.pattern.patternSlider();
    }

    
    // отрисовка zummmmmm
    drawZum(target) {
        const zum = this.getPatternZum();

        this.container.append(zum);

        this.zum = this.container.querySelector('.slider__wrapper-zum');
        const imgZum = this.zum.querySelector('.slider__img-zum');
        imgZum.classList.add(`backImg-${this.counterPoint}`);
    }

    closeZum() {
        this.zum.remove()
    }

    // получаем собранный zum
    getPatternZum() {
        return this.pattern.patternZum();
    }

    listToRight() {
        if(this.counter > 1) {
            this.widthSlider = this.slider.offsetWidth;

            // меняем margin у контейнера;
            this.marginLeft -= this.widthSlider;
            this.slideContainer.style.cssText = `margin-left: ${this.marginLeft}px;`;

            // ПЕРЕКЛЮЧАЕМ ПОИНТ НАВИГАЦИЮ
            this.counterPoint += 1;
            // Переназначаем lastNavPoint
            this.changeLastNavPoint(this.counterPoint);

            // считаем карточки
            this.counter --;
        }
    }

    listToLeft() {
        if(this.counter < 3) {
            this.widthSlider = this.slider.offsetWidth;

            // меняем margin у контейнера;
            this.marginLeft += this.widthSlider;
            this.slideContainer.style.cssText = `margin-left: ${this.marginLeft}px;`;

            // ПЕРЕКЛЮЧАЕМ ПОИНТ НАВИГАЦИЮ
            this.counterPoint -= 1;
            // Переназначаем lastNavPoint
            this.changeLastNavPoint(this.counterPoint);

            this.counter ++;
        }
    }

    listWithPoint(target) {
        this.widthSlider = this.slider.offsetWidth;
        
        let result = (Math.abs(+target.dataset.point - +this.lastNavPoint.dataset.point)) * this.widthSlider;

        // ПЕРЕНАЗНАЧАЕМ ПОИНТ НАВИГАЦИЮ
        this.counterPoint = +target.dataset.point;

        if(+target.dataset.point > +this.lastNavPoint.dataset.point) {
            // вычитаем margin

            // переназначаем counter для стрелок соответственно поинту вычисляя
            // актуальному counter и разнице data-point
            this.counter -= Math.abs(+target.dataset.point - +this.lastNavPoint.dataset.point);

            // Переназначаем lastNavPoint
            this.changeLastNavPoint(this.counterPoint);

            this.marginLeft -= result;
            this.slideContainer.style.cssText = `margin-left: ${this.marginLeft}px;`;

            
        }

        if(+target.dataset.point < +this.lastNavPoint.dataset.point) {
            // прибавляем margin

            // переназначаем counter для стрелок соответственно поинту вычисляя
            // актуальному counter и разнице data-point
            this.counter += Math.abs(+target.dataset.point - +this.lastNavPoint.dataset.point);

            // Переназначаем lastNavPoint
            this.changeLastNavPoint(this.counterPoint);

            this.marginLeft += result;
            this.slideContainer.style.cssText = `margin-left: ${this.marginLeft}px;`;
        }
    }

    changeLastNavPoint(counterPoint) {
        this.lastNavPoint.classList.remove('slider__navigation-item_active');
        this.lastNavPoint = this.pointNavigation.querySelector(`[data-point="${counterPoint}"]`);
        this.lastNavPoint.classList.add('slider__navigation-item_active');
    }
}