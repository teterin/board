import BoardTypes = require("./BoardTypes");
import CanvasBoard = require("./Canvas/CanvasBoard");
import HtmlBoard = require("./Html/HtmlBoard");
import BaseBoard = require("./BaseBoard");

declare var require: any;
require("../style.css");
var json = require("json!../data.json");

var dx = +json.startPosition.a.x;
var dy = +json.startPosition.a.y;

var canvasInput = <HTMLInputElement>document.getElementById("canvasInput");
var htmlInput = <HTMLInputElement> document.getElementById("htmlInput");

canvasInput.addEventListener("click", changeRender);
htmlInput.addEventListener("click", changeRender);

var board: BaseBoard;
canvasInput.checked = true;
changeRender();


function changeRender() {
    if (canvasInput.checked) {
        if (board) {
            board.dispose();
        }
        board = new CanvasBoard(json.widgets);
    }
    else {
        if (board) {
            board.dispose();
        }
        board = new HtmlBoard(json.widgets);
    }
    board.start(-dx, -dy, 0.05);
}