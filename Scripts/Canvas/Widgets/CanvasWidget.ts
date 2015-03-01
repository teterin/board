import BaseWidget = require("../../BaseWidget");

class CanvasWidget extends BaseWidget{
        
    protected _ctx: CanvasRenderingContext2D;   

    constructor(ctx: CanvasRenderingContext2D,x: number, y: number) {
        super(x, y);
        this._ctx = ctx;       
    }   
}

export =CanvasWidget;