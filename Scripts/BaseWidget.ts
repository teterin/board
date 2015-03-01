class BaseWidget {

    protected _x: number;
    protected _y: number;
    protected _scale=1;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    protected _calcCoords(sx: number, sy: number, ox: number, oy: number, scale: number) {
        this._x = ox + ((this._x - ox + sx) / this._scale) * scale;
        this._y = oy + ((this._y - oy + sy) / this._scale) * scale;
        this._scale = scale;
    }

    public draw(sx: number, sy: number, ox: number, oy: number, scale: number) {
        this._calcCoords(sx, sy, ox, oy, scale);
    }
}

export =BaseWidget;