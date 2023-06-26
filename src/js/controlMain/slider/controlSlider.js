export default class ControlSlider {
    constructor(drawUI) {
        this.drawUI = drawUI;

        this.onClick = this.onClick.bind(this)
    }

    init() {
        this.drawUI.rendering(); 
        
        this.drawUI.container.addEventListener('click', this.onClick)
    }

    onClick(e) {
        // Нажатие стрелки вправо
        if(e.target.matches('.slider__arrow-right')) {
            this.drawUI.listToRight();
        };

        // Нажатие стрелки влево
        if(e.target.matches('.slider__arrow-left')) {
            this.drawUI.listToLeft();
        } 

        // Нажатие поинт навигации
        if(e.target.matches('.slider__navigation-item')) {
            this.drawUI.listWithPoint(e.target);
        }

        // Открытие zuuuuum zuuuuum zuuuuum
        if(e.target.matches('.slider__wrapper-slide')) {
            this.drawUI.drawZum(e.target);
        }

        // закрытие zum по кнопке close
        if(e.target.matches('.slider__close-zum')) {
            this.drawUI.closeZum();
        }
    }
}