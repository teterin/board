import BaseWidgetCreator = require("../BaseWidgetCreator");
import BaseWidget = require("../BaseWidget");
import BaseBoard = require("../BaseBoard");
import CanvasBoard = require("./CanvasBoard");
import TextWidget = require("./Widgets/TextWidget");
import StickerWidget = require("./Widgets/StickerWidget");
import ImageWidget = require("./Widgets/ImageWidget");
import WidgetTypes = require("../WidgetTypes");
import BoardTypes = require("../BoardTypes");

class CanvasWidgetCreator extends BaseWidgetCreator {
    constructor() {
        super();
        this[WidgetTypes.Text] = (ctx: CanvasRenderingContext2D, params: BoardTypes.ITextWidgetParameters) => {
            return new TextWidget(ctx, params);
        };
        this[WidgetTypes.Sticker] = (ctx: CanvasRenderingContext2D, params: BoardTypes.IStickerWidgetParameters) => {
            return new StickerWidget(ctx, params);
        };
        this[WidgetTypes.Image] = (ctx: CanvasRenderingContext2D, params: BoardTypes.IImageWidgetParameters) => {
            return new ImageWidget(ctx, params);
        };
    }
    public createWidget(typeWidget: WidgetTypes, board: BaseBoard, params: BoardTypes.IWidgetParameters): BaseWidget {
        var canvasBoard = <CanvasBoard>board;
        return this[typeWidget](canvasBoard.canvasContext, params);
    }

}
export =CanvasWidgetCreator