export default class ControlPage {
    constructor(document, controlHeader, controlMain) {
        this.document = document;
        this.controlHeader = controlHeader;
        this.controlMain = controlMain;

        this.lastActiveElement = null;
        this.subMenu = null;
        this.clickedElementNav = null;

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
    }

    init() {
        this.controlHeader.element.addEventListener('mouseover', this.onMouseOver);
        this.controlHeader.element.addEventListener('click', this.onMouseClick);
    }

    onMouseOver(e) {
        // При наведении накладываем маску на элемент меню
        if(e.target.closest('.header__nav-link') && !e.target.parentElement.matches('.active')) { 
            let element = e.target.closest('.header__nav-item');
            let mask = element.querySelector('.link-mask');

            this.controlHeader.addMask(element, mask);

            this.controlHeader.element.addEventListener('mouseout', this.onMouseOut);
            this.controlHeader.element.removeEventListener('mouseover', this.onMouseOver);
        }
    }

    onMouseOut(e) {
        if(e.target.closest('.header__nav-link')) { 
            this.controlHeader.removeMask();

            this.controlHeader.element.removeEventListener('mouseout', this.onMouseOut);
            this.controlHeader.element.addEventListener('mouseover', this.onMouseOver);
        }
    }

    onMouseClick(e) {
        if(e.target.closest('.header__nav-link') && this.subMenu) {
            // Закрывается при повторном клике на элемент меню
            this.controlHeader.closeSubMenu(this.subMenu);
            this.subMenu = null;

            // Снимаем маску с main
            this.controlMain.unactiveMask();

            // Убираем метку с последнего кликнутого элемента
            this.clickedElementNav.classList.remove('active');

        } else if(e.target.closest('.header__nav-link') && !this.subMenu) {
            // Открываем подменю

            // Сохранияем кликнутый элемент и отмечаем его
            this.clickedElementNav = e.target.parentElement;
            this.clickedElementNav.classList.add('active');

            // Снимаем маску с элемента
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

                    // Убираем метку с последнего кликнутого элемента
                    this.clickedElementNav.classList.remove('active');
                }
            })
        }
    }
}