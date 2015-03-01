import BaseBoard = require("../BaseBoard");
import BaseWidgetCreator = require("../BaseWidgetCreator");
import CanvasWidgetCreator = require("./CanvasWidgetCreator");
import BoardTypes = require("../BoardTypes");


class CanvasBoard extends BaseBoard {
    private _ctx: CanvasRenderingContext2D;
    constructor(data: BoardTypes.IWidgetData[]) {
        super(data);
        this._setCanvasSize();      
        this._addEventHandler(window, "resize", this._onResize);
    }

    protected getCanvas(): HTMLElement {
        var boardElement = document.getElementById("board");
        var canvas = document.createElement("canvas");
        this._ctx = canvas.getContext('2d');
        boardElement.appendChild(canvas);
        return canvas;
    }

    public dispose() {
        super.dispose();
        document.getElementById("board").innerHTML = "";
    }

    protected getWidgetCreator(): BaseWidgetCreator {
        return new CanvasWidgetCreator();
    }

    public get canvasContext() {
        return this._ctx;
    }

    private _setCanvasSize() {
        var canvas = <HTMLCanvasElement>this._canvas;
        var parent = this._canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
    }

    private _onResize() {
        this._setCanvasSize();
        this.draw(0, 0);
    }

    public draw(sx: number, sy: number) {
        var canvas = <HTMLCanvasElement>this._canvas;
        this._ctx.clearRect(0, 0, canvas.width, canvas.height);
        super.draw(sx, sy);
    }
}
export =CanvasBoard;
