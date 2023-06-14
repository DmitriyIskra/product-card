export default class ControlPage {
    constructor(document, controlMemu) {
        this.document = document;
        this.controlMenu = controlMemu;

        this.lastActiveElement = null;
        this.lastActiveShort = null;

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
    }

    init() {
        this.document.addEventListener('mouseover', this.onMouseOver);
    }

    onMouseOver(e) {
        // При наведении накладываем маску на элемент меню
        if(e.target.closest('.header__nav-link')) { 
            let element = e.target.closest('.header__nav-item');
            let mask = element.querySelector('.short');

            this.controlMenu.addMask(element, mask);

            this.document.addEventListener('mouseout', this.onMouseOut);
            this.document.addEventListener('click', this.onMouseClick);
            this.document.removeEventListener('mouseover', this.onMouseOver);
        }
    }

    onMouseOut(e) {
        if(e.target.closest('.header__nav-link')) { 
            this.controlMenu.removeMask();

            this.document.removeEventListener('mouseout', this.onMouseOut);
            this.document.removeEventListener('click', this.onMouseClick);
            this.document.addEventListener('mouseover', this.onMouseOver);
        }
    }

    onMouseClick(e) {
        if(e.target.closest('.header__nav-link')) { 
            this.controlMenu.removeMask();

            // Поучаем data атрибут активного элемента
            const attrData = e.target.dataset.name;

            // получаем под меню и маску
            let el = this.controlMenu.getSubMenu(attrData);

            this.controlMenu.openMenu(el)
        }
    }
}