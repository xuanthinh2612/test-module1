/////////Bai 1
let arr = new Array(5, 4, 8, 9, 3, 6, 4, 5, 7, 9, 3, 10);

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

//test result
console.log(findMax(arr))


////////Bai 2

function tryRemoveFromArray(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

//test result
console.log(tryRemoveFromArray(arr, 4))

////Bai 3,
function isFibonacci(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    if (n === a || n === b) {
        return true
    } else {
        for (let i = 1; c <= n; i++) {
            c = a + b;
            if (n === c) {
                return true;
            } else {
                a = b;
                b = c;
            }
        }
        return false;
    }
}

//test result
console.log(isFibonacci(55));

////Bai 4
class Circle {
    constructor(x, y, radius, color) {
        this._xcoordinate = x;
        this._ycoordinate = y;
        this._radius = radius;
        this._color = color;
    }


    get x() {
        return this._xcoordinate;
    }

    set x(value) {
        this._xcoordinate = value;
    }

    get y() {
        return this._ycoordinate;
    }

    set y(value) {
        this._ycoordinate = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    draw() {
        let c = document.getElementById('canvas');
        let ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.color;
        ctx.stroke();

    }
}

//draw a circle
let circle = new Circle(100, 100, 50, 'blue');
circle.draw();