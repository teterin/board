import CanvasWidget = require("./CanvasWidget");
import BoardTypes = require("../../BoardTypes");
import Promise = require("../../Promise");

class ImageWidget extends CanvasWidget{
   
    private _angle: number;
    private _img: HTMLImageElement;
    private _promise: Promise;
    private _width: number;
    private _height: number;
    private _imgScale: number;


    constructor(ctx: CanvasRenderingContext2D, params: BoardTypes.IImageWidgetParameters) {
        super(ctx, params.x, params.y);   
        this._angle = params.angle;
        this._imgScale = params.scale;
        this._promise = new Promise();
        this._img = new Image();
        this._img.onload = () => { 
            this._width = this._img.width;
            this._height = this._img.height;
            this._promise.resolve();
        };
        this._img.src = params.url;      
    }

    public draw(sx: number, sy: number, ox: number, oy: number, scale: number) {
        super.draw(sx, sy, ox, oy, scale);
        this._promise.done(() => {           
            var commonScale = this._imgScale * scale;
            var width = this._width;
            var height = this._height;
            this._ctx.save();
            var alpha = this._angle * Math.PI / 180;
            var sx1 = Math.cos(alpha) * (width);
            var sx2 = -Math.sin(alpha) * (height);
            var sy1 = Math.cos(alpha) * (height);
            var sy2 = Math.sin(alpha) * (width);
            sx1 = sx1 > 0 ? 0 : sx1;
            sx2 = sx2 > 0 ? 0 : sx2;
            sy1 = sy1 > 0 ? 0 : sy1;
            sy2 = sy2 > 0 ? 0 : sy2;
            this._ctx.translate(this._x, this._y);
            this._ctx.translate(-(sx1 + sx2) * commonScale, -(sy1 + sy2) * commonScale);
            this._ctx.rotate(alpha);
            this._ctx.scale(commonScale, commonScale);
            this._ctx.drawImage(this._img, 0, 0);
            this._ctx.restore();
        });
    }  
}

export =ImageWidget;