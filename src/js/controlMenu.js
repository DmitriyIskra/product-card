export default class ControlMenu {
    constructor(element) {
        if(typeof(element === 'string')) {
            this.element = document.querySelector(element);
        }
        this.lastActiveElement = null;
        this.lastActiveShort = null;

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
    }

    init() {
        this.element.addEventListener('mouseover', this.onMouseOver);
        this.element.addEventListener('mouseout', this.onMouseOut);
        this.element.addEventListener('click', this.onMouseClick);
    }

    onMouseOver(e) {
        // При наведении накладываем маску на элемент меню
        if(e.target.closest('.header__nav-link')) { 
            this.lastActiveElement = e.target.closest('.header__nav-item');
            this.lastActiveShort = this.lastActiveElement.querySelector('.short');

            this.lastActiveElement.classList.add('hover-nav-item');
            this.lastActiveShort.classList.add('hover-nav-short');
        }
    }

    onMouseOut(e) {
        if(e.target.closest('.header__nav-link')) { 
            this.lastActiveElement.classList.remove('hover-nav-item');
            this.lastActiveShort.classList.remove('hover-nav-short');
        }
    }

    onMouseClick(e) {

    }
}