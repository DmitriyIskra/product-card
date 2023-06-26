export default class ControlPage {
    constructor(document, controlHeader, controlMain, data) {
        this.document = document;
        this.controlHeader = controlHeader;
        this.controlMain = controlMain;
        this.data = data;

        this.lastActiveTarget = null;
        this.subMenu = null; 
        this.clickedElementNav = null;

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
    }

    init() {
        this.controlHeader.element.addEventListener('mouseover', this.onMouseOver);
        this.controlHeader.element.addEventListener('click', this.onMouseClick);

        this.controlMain.element.addEventListener('click', this.onMouseClick);
        // отрисовываем таблицу при старте
        
        this.controlMain.redrawSpecifications(this.data.tableHeaders, this.data.tableContent);
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


    // добавить проверку на пункт меню, есть ли у него подменю...
    onMouseClick(e) {
        // РАБОТА МЕНЮ СТАРТ
        if(e.target.dataset.name === 'serve' || e.target.dataset.name === 'contacts') {
            return;
        }
   
        if(e.target.closest('.header__nav-link') && !this.lastActiveTarget && !this.subMenu) {
            // ОТКРЫВАЕМ МЕНЮ КАК В ПЕРВЫЙ РАЗ, ПРИ ЗАКРЫТОМ ПОДМЕНЮ

            //закрываем поиск если открыт 
            if(this.controlHeader.activeIconSearch) {
                this.controlHeader.redrawIconSearch(this.controlHeader.activeIconSearch);
                this.controlHeader.redrawPlaceSearch();
            }
            

            this.lastActiveTarget = e.target;
            // Сохранияем кликнутый элемент и отмечаем его
            this.clickedElementNav = e.target.parentElement;
            this.clickedElementNav.classList.add('active');

            // Снимаем маску с элемента
            this.controlHeader.removeMask();
            
            // Поучаем data атрибут активного элемента
            const attrData = e.target.dataset.name;
            
            // получаем подменю
            this.subMenu = this.controlHeader.getSubMenu(attrData);
            
            // активируем меню и маску
            this.controlHeader.openMenu(this.subMenu);
            this.controlMain.activeMask();

            // навешиваем на подменю слушатель событий
            this.subMenu.addEventListener('click', (e) => {
                // Закрываем по клику на крестик
                if(e.target.closest('.close-submenu')) {

                    this.controlHeader.closeSubMenu(this.subMenu);
                    this.subMenu = null;

                    // Снимаем маску с main
                    this.controlMain.unactiveMask();

                    // Убираем метку с последнего кликнутого элемента
                    this.clickedElementNav.classList.remove('active');

                    this.clickedElementNav = null;

                    this.lastActiveTarget = null;
                }
            })
        } else if(e.target.closest('.header__nav-link') && e.target.dataset.name !== this.lastActiveTarget.dataset.name && this.subMenu) {
            // ЗАКРЫВАЕМ ПРИ КЛИКЕ НА ДРУГОЙ ЭЛЕМЕНТ МЕНЮ
            this.controlHeader.closeSubMenu(this.subMenu);
            this.subMenu = null;

            // Снимаем маску с main
            this.controlMain.unactiveMask();

            // Убираем метку с последнего кликнутого элемента
            this.clickedElementNav.classList.remove('active');

            this.clickedElementNav = null;

    
            // ОТКРЫВАЕМ ПОДМЕНЮ ДРУГОГО ЭЛЕМЕНТА
            
            //закрываем поиск если открыт 
            if(this.controlHeader.activeIconSearch) {
                this.controlHeader.redrawIconSearch(this.controlHeader.activeIconSearch);
                this.controlHeader.redrawPlaceSearch();
            }

            this.clickedElementNav = e.target.parentElement;
            this.clickedElementNav.classList.add('active');

            this.lastActiveTarget = e.target;

            // Снимаем маску с элемента
            this.controlHeader.removeMask();
            
            // Поучаем data атрибут активного элемента
            const attrData = e.target.dataset.name;
            
            // получаем подменю
            this.subMenu = this.controlHeader.getSubMenu(attrData);
            
            // активируем меню и маску
            this.controlHeader.openMenu(this.subMenu);
            this.controlMain.activeMask();

            // навешиваем на подменю слушатель событий
            this.subMenu.addEventListener('click', (e) => {
                // Закрываем по клику на крестик
                if(e.target.closest('.close-submenu')) {

                    this.controlHeader.closeSubMenu(this.subMenu);
                    this.subMenu = null;

                    // Снимаем маску с main
                    this.controlMain.unactiveMask();

                    // Убираем метку с последнего кликнутого элемента
                    this.clickedElementNav.classList.remove('active');

                    this.clickedElementNav = null;

                    this.lastActiveTarget = null;
                }
            })

        } else if(e.target.closest('.header__nav-link') && e.target.dataset.name === this.lastActiveTarget.dataset.name && this.subMenu) {
            // ЗАКРЫВАЕМ ПРИ ПОВТОРНОМ КЛИКЕ НА ЭЛЕМЕНТ МЕНЮ
            this.controlHeader.closeSubMenu(this.subMenu);
            this.subMenu = null;

            // Снимаем маску с main
            this.controlMain.unactiveMask();

            // Убираем метку с последнего кликнутого элемента
            this.clickedElementNav.classList.remove('active');

            this.clickedElementNav = null;

            this.lastActiveTarget = null;
        }

        // РАБОТА МЕНЮ КОНЕЦ 

        // РАБОТА КНОПКИ ПОИСК СТАРТ
        if(e.target.matches('.header__icon-search')) {
            // РАБОТА ПРИ КЛИКЕ НА ПОИСК
            if(this.subMenu) {
                // Если открыто подменю, закрываем
                this.controlHeader.closeSubMenu(this.subMenu);
                this.subMenu = null;

                // Снимаем маску с main
                this.controlMain.unactiveMask();

                // Убираем метку с последнего кликнутого элемента
                this.clickedElementNav.classList.remove('active');

                this.clickedElementNav = null;

                this.lastActiveTarget = null;
            }

            // активируем строку поиска и перерисовываем лупу
            this.controlHeader.redrawIconSearch(e.target);
            this.controlHeader.redrawPlaceSearch();
        }

        // РАБОТА КНОПКИ ПОИСК ФИНИШ


        // РАБОТА ПОЛЯ ИНФОРМАЦИИ И ФАЙЛОВ СТАРТ
        if(e.target.matches('.tech-haracteristic')) { // && !e.target.matches('.active-tech-haracteristic')
            // отрисовка поля информации
            this.controlMain.redrawSpecifications(this.data.tableHeaders, this.data.tableContent);

            // отрисовка элементов вкладок
            this.controlMain.redrowInfoNav(e.target);
        }

        if(e.target.matches('.informational-materials')) {//   && !e.target.matches('.active-tech-haracteristic')
            // отрисовка поля информации
            this.controlMain.redrawInfoFiles(this.data.namesInfo, this.data.linksInfo);

            // отрисовка элементов вкладок
            this.controlMain.redrowInfoNav(e.target);
        }

        // РАБОТА ПОЛЯ ИНФОРМАЦИИ И ФАЙЛОВ ФИНИШ
    }
}