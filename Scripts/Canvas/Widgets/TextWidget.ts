import CanvasWidget = require("./CanvasWidget");
import BoardTypes = require("../../BoardTypes");

class TextWidget extends CanvasWidget {

    private _width: number;
    private _text: string
    private _fontSize: number;
    private _lineHeight: number;

    constructor(ctx: CanvasRenderingContext2D, params: BoardTypes.ITextWidgetParameters) {
        super(ctx, params.x, params.y);
        this._width = params.width * params.scale;
        this._text = params.text;
        this._fontSize = 10 * params.scale;
        this._lineHeight = 16.5 * params.scale;
    }

    public draw(sx: number, sy: number, ox: number, oy: number, scale: number) {
        super.draw(sx, sy, ox, oy, scale);
        this._ctx.font = (this._fontSize * scale) + "pt Arial";
        this._ctx.textBaseline = 'top';
        var arr = this._text.match(/<P>(.*?)<\/P>/g);
        var top = this._y;
        var lineHeight = this._lineHeight * scale;
        arr.forEach((item) => {
            var arr = item.match(/<P><F C="(.*?)">(.*?)<\/FONT><\/P>/);
            if (!arr) {
                return;
            }
            this._ctx.fillStyle = arr[1];
            var text = arr[2];
            var text = text.replace(/<F C=".*">.*?<\/FONT>/g, "");
            top = this._wrapText(this._ctx, text, this._x, top, this._width * scale, lineHeight);
            top += lineHeight;
        });

    }

    private _wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, width: number, lineHeight: number): number {
        var words = text.split(" ");
        var countWords = words.length;
        var line = [];
        for (var n = 0; n < countWords; n++) {
            line.push(words[n]);
            var testWidth = ctx.measureText(line.join(" ")).width;
            if (testWidth > width) {
                line.pop();
                ctx.fillText(line.join(" "), x, y);
                line = [words[n]];
                y += lineHeight;
            }            
        }
        ctx.fillText(line.join(" "), x, y);
        return y;
    }

}

export =TextWidget;