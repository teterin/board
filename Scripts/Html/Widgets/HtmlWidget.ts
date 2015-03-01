import BaseWidget = require("../../BaseWidget");

class HtmlWidget extends BaseWidget {

    protected _element: HTMLElement;

    constructor(container: HTMLElement, x: number, y: number, elementTag: string= "div") {
        super(x, y);
        this._element = document.createElement(elementTag);
        this._element.style.position = "absolute";
        this._element.style.zIndex = "1";
        this._element.style.fontFamily = "Arial";
        this._element.style.display = 'none';
        container.appendChild(this._element);
    }
    public draw(sx: number, sy: number, ox: number, oy: number, scale: number) {
        super.draw(sx, sy, ox, oy, scale);
        this._element.style.display = 'none';
        this._applyDrawAttributes();
        this._element.style.display = 'block';
    }

    protected _applyDrawAttributes() {
        this._element.style.top = this._y + "px";
        this._element.style.left = this._x + "px";
    }
}

export =HtmlWidget;