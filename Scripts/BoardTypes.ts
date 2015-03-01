import WidgetTypes = require("./WidgetTypes");

export interface IWidgetData extends IWidgetParameters{   
    width: number;
    scale: number;
    angle: number;
    text: string;
    type: WidgetTypes;
    url: string;
}
export interface IWidgetParameters {
    x: number;
    y: number;
}

export interface ITextWidgetParameters extends IWidgetParameters {
    width: number;
    scale: number;
    text: string;
}

export interface IStickerWidgetParameters extends IWidgetParameters {
    text: string;
}

export interface IImageWidgetParameters extends IWidgetParameters {
    scale: number;
    angle: number;
    url: string;
}
