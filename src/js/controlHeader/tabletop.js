import GetPointsSubMenu from "./getPointsSubMenu";

export default class TableTop extends GetPointsSubMenu {
    constructor(drinks, serving, tableDecor, spices, amountColumns, amountElements, generator, index) {
        super(generator, index);
        this.itemsSubMenu = [drinks, serving, tableDecor, spices,];
        this.amountColumns = amountColumns;
        this.amountElements = amountElements;
    }

    
    
    
}