// type Key = 'up' | 'down' | 'left' | 'right';

// function doSomething(keyPressed: Key) {
//     console.log(keyPressed);
// }

// doSomething('up'); // Allowed!
//doSomething('ifhwhiw'); // Error! TypeScript stops you immediately.

// a better way to do it is using enum: because type disapperas when ts is compiled to js
// enum gets compiled into object

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
// or 
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }