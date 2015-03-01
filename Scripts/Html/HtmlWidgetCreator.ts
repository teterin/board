import BaseWidgetCreator = require("../BaseWidgetCreator");
import BaseWidget = require("../BaseWidget");
import BaseBoard = require("../BaseBoard");
import HtmlBoard = require("./HtmlBoard");
import TextWidget = require("./Widgets/TextWidget");
import StickerWidget = require("./Widgets/StickerWidget");
import ImageWidget = require("./Widgets/ImageWidget");
import WidgetTypes = require("../WidgetTypes");
import BoardTypes = require("../BoardTypes");

class HtmlWidgetCreator extends BaseWidgetCreator{
    constructor() {
        super();
        this[WidgetTypes.Text] = (container: HTMLElement, params: BoardTypes.ITextWidgetParameters) => {
            return new TextWidget(container, params);
        };
        this[WidgetTypes.Sticker] = (container: HTMLElement, params: BoardTypes.IStickerWidgetParameters) => {
            return new StickerWidget(container, params);
        };
        this[WidgetTypes.Image] = (container: HTMLElement, params: BoardTypes.IImageWidgetParameters) => {
            return new ImageWidget(container, params);
        };
    }
    public createWidget(typeWidget: WidgetTypes, board: BaseBoard, params: BoardTypes.IWidgetParameters): BaseWidget {        
        var htmlBoard = <HtmlBoard>board;
        return this[typeWidget](htmlBoard.widgetContainer, params);
    }

}
export =HtmlWidgetCreator