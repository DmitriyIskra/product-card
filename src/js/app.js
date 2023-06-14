import ControlMenu from "./controlHeader/controlHeader";
import ControlPage from "./controlPage";

const controlMenu = new ControlMenu('.header');

const controlPage = new ControlPage(document.body, controlMenu);

controlPage.init()