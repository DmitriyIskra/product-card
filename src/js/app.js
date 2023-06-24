import ControlHeader from "./controlHeader/controlHeader";
import ControlMain from "./controlMain/controlMain";
import ControlPage from "./controlPage";
import LifeStyleMenu from "./controlHeader/lifestyleMenu";
import Tableware from "./controlHeader/tableware";
import TableTop from "./controlHeader/tabletop";
import Generator from "./generator";
import SwedishLine from "./controlHeader/swedishline";
import PatternInfo from "./controlMain/patternInfo";
import DataInfo from "./controlMain/data";

const generator = new Generator();


const lifeStyleMenu = new LifeStyleMenu(['SYNERGY & STYLE LIGHTS', 'Фарфор SYNERGY', 'Линейка продуктов Lifestyle']);


//  количество колонок в подменю, количество элементов в подменю, и задаем пункты в элементе подменю
const itemsNewEasy = ['THE NEW EASY', 'Все коллекции'];
const arrtableware = ['Столовые приборы', 'Все столовые приборы', 'Коллекции', 'О столовых приборах'];
const servingDevices = ['Специальные сервировочные приборы', 'Все коллекции', 'Все специальные сервировочные приборы', 'Приборы для стейка RODEO'];
const finishingDevices = ['Специальная отделка приборов', 'Все коллекции'];
const tableware = new Tableware(itemsNewEasy, arrtableware, servingDevices, finishingDevices, 2, 2);


const drinks = ['Напитки', 'True Flavour: хрустальное стекло', 'Кофе и чай', 'Кулеры', 'Все позиции', 'Коллекции', 'О стекле WMF Firstglass'];
const serving = ['Сервировка', 'Все позиции', 'Коллекции'];
const tableDecor = ['Столовый декор', 'Все позиции', 'Коллекции'];
const spices = ['Специи', 'Все позиции', 'Коллекции'];
const tabletop = new TableTop(drinks, serving, tableDecor, spices, 2, 2);

const quadro = ['WMF Quadro', 'Все позиции', 'WMF Quadro модули', 'WMF Quadro сеты', 'О WMF Quadro'];
const termo = ['Мармиты и термоемкости', 'Все позиции', 'Коллекции', 'О мармитах'];
const dispensers = ['Диспенсеры', 'Все позиции'];
const servingDrinks = ['Подача блюд и напитков', 'Все позиции'];
const swedishline = new SwedishLine(quadro, termo, dispensers, servingDrinks, 2, 2)


const patternInfo = new PatternInfo();

const controlHeader = new ControlHeader('.header', generator, lifeStyleMenu, tableware, tabletop, swedishline);

const controlMain = new ControlMain('.main', patternInfo);

const dataInfo = new DataInfo();
const controlPage = new ControlPage(document.body, controlHeader, controlMain, dataInfo);

controlPage.init()

// SLIDER

import ControlSlider from './controlMain/slider/controlSlider';
import DrawUISlider from "./controlMain/slider/drawUI";
import Pattern from "./controlMain/slider/pattern";

const imgArr = [
    './img/img_slider_1.png',
    'img/img_slider_2.png',
    'img/img_slider_3.png'
];

const pattern = new Pattern(imgArr);
const drawUISlider = new DrawUISlider('.main__slider-container', pattern);
const controlSlider = new ControlSlider(drawUISlider);

controlSlider.init();

// END SLIDER

