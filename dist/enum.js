"use strict";
// type Key = 'up' | 'down' | 'left' | 'right';
Object.defineProperty(exports, "__esModule", { value: true });
// function doSomething(keyPressed: Key) {
//     console.log(keyPressed);
// }
// doSomething('up'); // Allowed!
//doSomething('ifhwhiw'); // Error! TypeScript stops you immediately.
// a better way to do it is using enum: because type disapperas when ts is compiled to js
// enum gets compiled into object
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// or 
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
