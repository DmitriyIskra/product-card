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
        const maskSubMenu = document.createElement('div');

        wraperSubMenu.classList.add('wraperSubMenu');
        wraperSubMenu.classList.add('unactive-sub');
        placeSubMenu.classList.add('placeSubMenu');
        maskSubMenu.classList.add('maskSubMenu');

        placeSubMenu.append(html);

        wraperSubMenu.append(placeSubMenu);
        wraperSubMenu.append(maskSubMenu);

        let height = this.element.offsetHeight;
        console.log(this.element, height)
        wraperSubMenu.style.top = `${height}px`

        return wraperSubMenu;
    }

    addMask(elem, mask) {
        // При наведении накладываем маску на элемент меню
            this.lastActiveElement = elem;
            this.lastActiveMask = mask;

            this.lastActiveElement.classList.add('hover-nav-item');
            this.lastActiveMask.classList.add('hover-nav-short');
    }

    removeMask() { 
            this.lastActiveElement.classList.remove('hover-nav-item');
            this.lastActiveMask.classList.remove('hover-nav-short');
    }

    openMenu(element) {
        this.lastActiveElement.classList.remove('hover-nav-item');
        this.lastActiveMask.classList.remove('hover-nav-short');

        element.classList.toggle('unactive-sub')

        this.element.append(element)
    }

    // Получаем под меню
    getSubMenu(value) {
        const element = this[value].getLifeStyleMenu();
        const subMenu = this.createPattern(element);

        return subMenu;
    }

    closeSubMenu(element) {

    }
}