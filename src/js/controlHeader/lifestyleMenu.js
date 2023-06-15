
export default class LifeStyleMenu {
    constructor (arr) {
        this.itemsSubMenu = arr; 
    }

    getPointsSubMenu() {
        const subMenu = document.createElement('div');
        subMenu.classList.add('submenu');

        const subMenuList = document.createElement('ul');
        subMenuList.classList.add('submenu-list');

        this.itemsSubMenu.forEach( el => {
            const subMenuItem = document.createElement('li');
            const subMenuLink = document.createElement('a');

            subMenuItem.classList.add('submenu-item');

            subMenuLink.classList.add('submenu-link');
            subMenuLink.setAttribute('href', '#0')
            subMenuLink.textContent = el;

            subMenuItem.append(subMenuLink);

            subMenuList.append(subMenuItem);
        })

        const closeSubMenu = document.createElement('div');
        closeSubMenu.classList.add('close-submenu');
        subMenu.style.paddingBottom = '299px';

        subMenu.append(subMenuList);
        subMenu.append(closeSubMenu);

        return subMenu;
    }
}