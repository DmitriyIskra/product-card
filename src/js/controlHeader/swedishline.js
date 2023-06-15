import GetPointsSubMenu from "./getPointsSubMenu";

export default class SwedishLine extends GetPointsSubMenu {
    constructor(quadro, termo, dispensers, serving, amountColumns, amountElements, generator, index) {
        super(generator, index);
        this.itemsSubMenu = [quadro, termo, dispensers, serving];
        this.amountColumns = amountColumns;
        this.amountElements = amountElements;
    }
}