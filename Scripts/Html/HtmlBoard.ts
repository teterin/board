import BaseBoard = require("../BaseBoard");
import BaseWidgetCreator = require("../BaseWidgetCreator");
import HtmlWidgetCreator = require("./HtmlWidgetCreator");


class HtmlBoard extends BaseBoard {

    protected getCanvas(): HTMLElement {
        return document.getElementById("board");
    }

    protected getWidgetCreator(): BaseWidgetCreator {
        return new HtmlWidgetCreator();
    }

    public get widgetContainer() {
        return this._canvas;
    }

    public dispose() {
        super.dispose();
        document.getElementById("board").innerHTML = "";
    }

}
export =HtmlBoard;


