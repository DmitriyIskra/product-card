import GetPointsSubMenu from "./getPointsSubMenu";

export default class Tableware extends GetPointsSubMenu {
    constructor(itemsNewEasy, tableware, servingDevices, finishingDevices, amountColumns, amountElements, generator, index) {
        super(generator, index);
        this.itemsSubMenu = [itemsNewEasy, tableware, servingDevices, finishingDevices];
        this.amountColumns = amountColumns;
        this.amountElements = amountElements;
    }

}