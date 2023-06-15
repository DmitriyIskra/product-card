import ControlHeader from "./controlHeader/controlHeader";
import ControlMain from "./controlMain/controlMain";
import ControlPage from "./controlPage";
import LifeStyleMenu from "./controlHeader/lifestyleMenu";
import Tableware from "./controlHeader/tableware";
import TableTop from "./controlHeader/tabletop";
import Generator from "./generator";

const generator = new Generator();


const lifeStyleMenu = new LifeStyleMenu(['SYNERGY & STYLE LIGHTS', 'Фарфор SYNERGY', 'Линейка продуктов Lifestyle']);


//  количество колонок в подменю, количество элементов в подменю, и задаем пункты в элементе подменю
const itemsNewEasy = ['THE NEW EASY', 'Все коллекции'];
const arrtableware = ['Столовые приборы', 'Все столовые приборы', 'Коллекции', 'О столовых приборах'];
const servingDevices = ['Специальные сервировочные приборы', 'Все коллекции', 'Все специальные сервировочные приборы', 'Приборы для стейка RODEO'];
const finishingDevices = ['Специальная отделка приборов', 'Все коллекции'];
const tableware = new Tableware(itemsNewEasy, arrtableware, servingDevices, finishingDevices, 2, 2);


const quadro = ['WMF Quadro', 'Все позиции', 'WMF Quadro модули', 'WMF Quadro сеты', 'О WMF Quadro'];
const termo = ['Мармиты и термоемкости', 'Все позиции', 'Коллекции', 'О мармитах'];
const dispensers = ['Диспенсеры', 'Все позиции'];
const serving = ['Подача блюд и напитков', 'Все позиции'];
const tabletop = new TableTop(quadro, termo, dispensers, serving, 2, 2);


const controlHeader = new ControlHeader('.header', generator, lifeStyleMenu, tableware, tabletop);
const controlMain = new ControlMain('.main');

const controlPage = new ControlPage(document.body, controlHeader, controlMain);

controlPage.init()

