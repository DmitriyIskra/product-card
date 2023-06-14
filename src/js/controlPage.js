export default class ControlPage {
    constructor(document, controlHeader, controlMain) {
        this.document = document;
        this.controlHeader = controlHeader;
        this.controlMain = controlMain;

        this.lastActiveElement = null;
        this.lastActiveShort = null;
        this.subMenu = null;

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
            let mask = element.querySelector('.link-mask');

            this.controlHeader.addMask(element, mask);

            this.document.addEventListener('mouseout', this.onMouseOut);
            this.document.addEventListener('click', this.onMouseClick);
            this.document.removeEventListener('mouseover', this.onMouseOver);
        }
    }

    onMouseOut(e) {
        if(e.target.closest('.header__nav-link')) { 
            this.controlHeader.removeMask();

            this.document.removeEventListener('mouseout', this.onMouseOut);
            this.document.removeEventListener('click', this.onMouseClick);
            this.document.addEventListener('mouseover', this.onMouseOver);
        }
    }

    onMouseClick(e) {
        if(e.target.closest('.header__nav-link') && this.subMenu) {
            // Закрывается при повторном клике на элемент меню
            this.controlHeader.closeSubMenu(this.subMenu);
            this.subMenu = null;

            // Снимаем маску с main
            this.controlMain.unactiveMask();

        } else if(e.target.closest('.header__nav-link') && !this.subMenu) {
            this.controlHeader.removeMask();
            
            // Поучаем data атрибут активного элемента
            const attrData = e.target.dataset.name;

            // получаем под меню и маску
            this.subMenu = this.controlHeader.getSubMenu(attrData);
            
            this.controlHeader.openMenu(this.subMenu);
            this.controlMain.activeMask();

            this.subMenu.addEventListener('click', (e) => {
                // Закрываем по клику на крестик
                if(e.target.closest('.close-submenu')) {
                    this.controlHeader.closeSubMenu(this.subMenu);
                    this.subMenu = null;

                    // Снимаем маску с main
                    this.controlMain.unactiveMask();
                }
            })
        }
    }
}