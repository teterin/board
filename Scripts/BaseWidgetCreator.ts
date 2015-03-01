import BaseWidget = require("./BaseWidget");
import BaseBoard = require("./BaseBoard");
import WidgetTypes = require("./WidgetTypes");
import BoardTypes = require("./BoardTypes");

class BaseWidgetCreator {
    public createWidget(typeWidget: WidgetTypes, board: BaseBoard, params: BoardTypes.IWidgetParameters): BaseWidget {
        throw new Error("Abstract method");
    }
}
export =BaseWidgetCreator