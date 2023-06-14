import ControlMenu from "./controlHeader/controlHeader";
import ControlMain from "./controlMain/controlMain";
import ControlPage from "./controlPage";


const controlHeader = new ControlMenu('.header');
const controlMain = new ControlMain('.main')

const controlPage = new ControlPage(document.body, controlHeader, controlMain);

controlPage.init()