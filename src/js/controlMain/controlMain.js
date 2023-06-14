export default class ControlMain {
    constructor(element) {
        if(typeof(element)) {
            this.element = document.querySelector(element);
        }

        this.mask = this.element.querySelector('.main__mask');
    }

    activeMask() {
        let height = this.element.offsetHeight;
        let top = this.element.offsetTop;

        this.mask.classList.add('main__mask_active');
        this.mask.style.height = `${height}px`;
        this.mask.style.top = `${top}px`;
    }

    unactiveMask() {
        this.mask.classList.remove('main__mask_active');
    }
}