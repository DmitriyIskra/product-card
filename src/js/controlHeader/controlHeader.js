import LifeStyleMenu from "./lifestyleMenu";

export default class ControlMenu {
    constructor(element) {
        if(typeof(element === 'string')) {
            this.element = document.querySelector(element);
        }

        this.lifestyle = new LifeStyleMenu();

        this.subMenu = null;
        this.lastActiveElement = null;
        this.lastActiveMask = null;
    }

    createPattern(html) {
        const wraperSubMenu = document.createElement('div');
        const placeSubMenu = document.createElement('div');
        // const maskSubMenu = document.createElement('div');

        wraperSubMenu.classList.add('wraperSubMenu');
        wraperSubMenu.classList.add('unactive-sub');
        placeSubMenu.classList.add('placeSubMenu');
        // maskSubMenu.classList.add('maskSubMenu');

        placeSubMenu.append(html);

        wraperSubMenu.append(placeSubMenu);
        // wraperSubMenu.append(maskSubMenu);

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

        el.classList.remove('unactive-sub');

        this.element.before(el);
    }

    // Получаем под меню
    getSubMenu(value) {
        const element = this[value].getLifeStyleMenu();
        const subMenu = this.createPattern(element);

        return subMenu;
    }

    closeSubMenu(element) {
        element.remove();
    }
}