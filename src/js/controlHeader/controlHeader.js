
export default class ControlHeader {
    constructor(element, generator, lifeStyleMenu, tableware, tabletop, swedishline) {
        if(typeof(element === 'string')) {
            this.element = document.querySelector(element);
        }

        this.generator = generator;
        this.placeSearch = this.element.querySelector('.header__place-search');
        this.longLine = this.element.querySelector('.header__long-underline');

        this.lifestyle = lifeStyleMenu;
        this.tableware = tableware;
        this.tabletop = tabletop;
        this.swedishline = swedishline; 

        this.subMenu = null;
        this.lastActiveElement = null;
        this.lastActiveMask = null;
        this.lastShortLine = null;
        this.activeIconSearch = null;
    }

    createPattern(html) {
        const wraperSubMenu = document.createElement('div');
        const placeSubMenu = document.createElement('div');

        wraperSubMenu.classList.add('wraperSubMenu');
        wraperSubMenu.classList.add('unactive-sub');
        placeSubMenu.classList.add('placeSubMenu');

        wraperSubMenu.append(html);

        let height = this.element.offsetHeight;

        wraperSubMenu.style.top = `${height}px`;

        return wraperSubMenu;
    }

    addMask(elem, mask) {
        // При наведении накладываем маску на элемент меню
        this.lastActiveElement = elem;
        this.lastActiveMask = mask;

        this.lastActiveMask.classList.add('hover-nav-mask');
    }

    removeMask() { 
        this.lastActiveMask.classList.remove('hover-nav-mask');
    }

    openMenu(el) {
        this.lastActiveMask.classList.remove('hover-nav-mask');
        this.lastShortLine = this.lastActiveElement.querySelector('.header__short-line');

        el.classList.remove('unactive-sub');

        this.element.before(el);

        this.longLine.style.opacity = '0';
        this.lastShortLine.classList.add('short-line-active');
    }

    // Получаем под меню
    getSubMenu(value) {
        
        if(value !== 'lifestyle') {
            this[value].generator = this.generator.gen();
        }

        const element = this[value].getPointsSubMenu();
        const subMenu = this.createPattern(element);

        this[value].generator = null;
 
        return subMenu;
    }

    closeSubMenu(element) {
        if(element) {
            element.remove();

            this.longLine.style.opacity = '';
            this.lastShortLine.classList.remove('short-line-active');
        }

        
    }

    // Перерисовка иконки поиска
    redrawIconSearch(target) {
        if(target.matches('.header__icon-search_active')) {
            target.classList.remove('header__icon-search_active');
            this.activeIconSearch = null;
            return;
        }

        target.classList.add('header__icon-search_active');
        this.activeIconSearch = target;
    }

    // активация поля для ввода поиска
    redrawPlaceSearch() {
        if(this.placeSearch.matches('.place-search_active')) {
            this.placeSearch.classList.remove('place-search_active');
            return;
        }

        this.placeSearch.classList.add('place-search_active');
        this.placeSearch.parentElement.reset();
    }
}