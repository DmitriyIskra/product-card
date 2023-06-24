export default class ControlMain {
    constructor(element, pattern) {
        if(typeof(element) === 'string') {
            this.element = document.querySelector(element);
        }

        this.pattern = pattern

        this.infoNavigations = this.element.querySelector('.main__nav-tech-info');
        this.lastActiveNavigations = this.infoNavigations.querySelector('.active-tech-haracteristic');

        this.mask = this.element.querySelector('.main__mask');

        this.placeSpecifications = this.element.querySelector('.main__tech-info-container');
        this.lastInfoElement = null;
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

    // Перерисовка карточек характеристик и информации
    redrowInfoNav(target) {
        this.lastActiveNavigations.classList.remove('active-tech-haracteristic');

        if(target.matches('.informational-materials')) {
            target.style.borderRight = '2px dashed #777777';
        } else {
            this.lastActiveNavigations.style.borderRight = '';
        }

        target.classList.add('active-tech-haracteristic');

        this.lastActiveNavigations = target;        
    }

    redrawSpecifications(headers, contents) {
        // отрисовка таблицы 

        // получаем
        const pattern = this.pattern.getPatternSpecifications(headers, contents);

        // если уже было отрисовано очищаем 
        if(this.lastInfoElement) this.removeInfo();

        // отрисовываем новый
        this.placeSpecifications.append(pattern);

        // сохраняем новый
        this.lastInfoElement = this.placeSpecifications.querySelector('.wrapper-info');;
    }

    redrawInfoFiles(names, links) {
        // отрисовка файлов
        // получаем
        const pattern = this.pattern.getPatternFiles(names, links);

        // если уже было отрисовано очищаем 
        if(this.lastInfoElement) this.removeInfo();

        // отрисовываем новый
        this.placeSpecifications.append(pattern);

        // сохраняем новый
        this.lastInfoElement = this.placeSpecifications.querySelector('.wrapper-info');
    }

    removeInfo() {
        console.log('work')
        // удаляем класс активности
        this.lastInfoElement.classList.remove('active-tech-haracteristic')
        this.lastInfoElement.remove();
    }
}