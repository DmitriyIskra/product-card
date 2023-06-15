export default class Tableware {
    constructor(itemsNewEasy, tableware, servingDevices, finishingDevices, amountColumns, amountElements) {
        this.itemsSubMenu = [itemsNewEasy, tableware, servingDevices, finishingDevices];
        this.amountColumns = amountColumns;
        this.amountElements = amountElements;
        this.generator = null;

        this.index = null;
    }

    
    
    getPointsSubMenu() {
        const subMenu = document.createElement('div');
        subMenu.classList.add('submenu');

        const subMenuColumns = document.createElement('ul');
        subMenuColumns.classList.add('submenu-columns');


        // создается колонка
        for(let i = 0; i < this.amountColumns; i += 1) {
            const columnsItem = document.createElement('li');
            columnsItem.classList.add('columns-item');

            // создается элемент колонки
            for(let j = 0; j < this.amountElements; j += 1) {
                const elementWr = document.createElement('ul.');
                elementWr.classList.add('element-wr');

                this.index = this.generator.next().value;
                
                // создаются пункты елемента колонки
                this.itemsSubMenu[this.index].forEach((item, i, arr) => {
                    // если элемент в массиве первый то будет заголовок
                    const elementItem = document.createElement('li');
                    elementItem.classList.add('element-item');

                    const elementItemLink = document.createElement('a');
                    elementItemLink.textContent = item;

                    if(i === 0) {
                        // если пункт первый, то создается с заголовком

                        const elementItemTitle = document.createElement('h2');
                        elementItemTitle.classList.add('element-item-title');

                        elementItemLink.classList.add('element-item-title-link');

                        elementItemTitle.append(elementItemLink);

                        elementItem.append(elementItemTitle);
                        
                    } else {
                        // если пункт не первый, то создается без заголовка
                        elementItem.classList.add('element-item');
                        elementItem.classList.add('element-item-point');

                        elementItemLink.classList.add('element-item-link');

                        elementItem.append(elementItemLink)
                        
                    }
                    
                    elementWr.append(elementItem);
                    
                })
                
                columnsItem.append(elementWr);
                
            }
            
            subMenuColumns.append(columnsItem);
            
        }

        

        const closeSubMenu = document.createElement('div');
        closeSubMenu.classList.add('close-submenu');
        subMenu.style.paddingBottom = '299px';

        subMenu.append(subMenuColumns);
        subMenu.append(closeSubMenu);

        return subMenu;
    }
}