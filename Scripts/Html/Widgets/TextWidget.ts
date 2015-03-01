import HtmlWidget = require("./HtmlWidget");
import BoardTypes = require("../../BoardTypes");


class TextWidget extends HtmlWidget {
    private _width: number;
    private _text: string
    private _fontSize: number;

    constructor(container:HTMLElement, params: BoardTypes.ITextWidgetParameters) {
        super(container, params.x, params.y);
        this._width = params.width * params.scale;
        this._fontSize = 10 * params.scale;
        this._text = params.text;
        this._createFormattedText();
    }

    private _createFormattedText() {
        var arr = this._text.match(/<P>(.*?)<\/P>/g);
        arr.forEach((item) => {
            var arr = item.match(/<P><F C="(.*?)">(.*?)<\/FONT><\/P>/);
            if (!arr) {
                return;
            }
            var p = document.createElement("div");
            p.style.color = arr[1];
            var text = arr[2];
            var text = text.replace(/<F C=".*">.*?<\/FONT>/g, "");
            if (text == "") {
                text = "&nbsp;";
            }
            p.innerHTML = text;
            this._element.appendChild(p);
        });
    }

    protected _applyDrawAttributes() {
        super._applyDrawAttributes();
        this._element.style.width = this._width * this._scale + "px";
        this._element.style.fontSize = (this._fontSize * this._scale) + "pt";
    }
}

export =TextWidget;