import Promise = require("../../Promise");
import HtmlWidget = require("./HtmlWidget");
import BoardTypes = require("../../BoardTypes");

class ImageWidget extends HtmlWidget{
       
    private _angle: number;
    private _url: string
    private _width: number;
    private _heigh: number;
    private _promise: Promise;

    constructor(container: HTMLElement,params: BoardTypes.IImageWidgetParameters) {
        super(container, params.x, params.y,"img");
        this._angle = params.angle;
        this._element.addEventListener("mousedown", (event: MouseEvent) => { event.stopPropagation(); });
        this._element.addEventListener("mouseup", (event: MouseEvent) => { event.stopPropagation(); });
        this._promise = new Promise();
        var element: HTMLImageElement = <HTMLImageElement>this._element;
        this._element.onload = () => {
            this._width = element.width * params.scale;
            this._heigh = element.height * params.scale;
            this._element.style.transform = "rotate(" + this._angle + "deg)";
            this._promise.resolve();
        };
        element.src = params.url;        
    }
    public draw(sx: number, sy: number, ox: number, oy: number, scale: number) {
        this._calcCoords(sx, sy, ox, oy, scale); 
        this._promise.done(() => { 
            this._element.style.display = 'none';
            this._applyDrawAttributes();
            this._element.style.display = 'block';
        });
    }

    protected _applyDrawAttributes() {
        var alpha = this._angle * Math.PI / 180;
        var width = this._width * this._scale;
        var height = this._heigh * this._scale;

        var dx = width / 2 - (Math.abs(Math.cos(alpha) * width / 2) + Math.abs(Math.sin(alpha) * height / 2));
        var dy = height / 2 - (Math.abs(Math.cos(alpha) * height / 2) + Math.abs(Math.sin(alpha) * width / 2));

        this._element.style.top = (this._y - dy) + "px";
        this._element.style.left = (this._x - dx) + "px";
        this._element.style.width = width + "px";
        this._element.style.height = height + "px";
    }
}
export =ImageWidget;