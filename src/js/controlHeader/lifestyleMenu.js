
export default class LifeStyleMenu {
    constructor () {
        this.itemsSubMenu = ['SYNERGY & STYLE LIGHTS', 'Фарфор SYNERGY', 'Линейка продуктов Lifestyle']
    }

    getLifeStyleMenu() {
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

        subMenu.append(subMenuList);
        subMenu.append(closeSubMenu);

        return subMenu;
    }
}