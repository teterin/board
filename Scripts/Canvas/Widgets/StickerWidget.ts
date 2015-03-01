import CanvasWidget = require("./CanvasWidget");
import BoardTypes = require("../../BoardTypes");

class StickerWidget extends CanvasWidget{
    
    private _text: string

    constructor(ctx: CanvasRenderingContext2D,params: BoardTypes.IStickerWidgetParameters) {
        super(ctx, params.x, params.y);       
        this._text = params.text;
    }

    public draw(sx: number, sy: number, ox: number, oy: number, scale: number) {
        super.draw(sx, sy, ox, oy, scale);
        var size = 200*scale;
        this._ctx.fillStyle = "#FFFF00";       
        this._ctx.fillRect(this._x, this._y , size, size);
        this._ctx.fillStyle = "#000";
        this._ctx.font =(25*scale)+"pt Arial";
        var textWidth = this._ctx.measureText(this._text).width;
        this._ctx.textBaseline = 'top';
        this._ctx.fillText(this._text, this._x+(size-textWidth)/2, this._y);
    }
}

export =StickerWidget;