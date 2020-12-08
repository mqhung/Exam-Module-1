//bai1
function findMax(score) {
    if (score.length == 0) {
        console.log("Let input score");
        return false;
    }
    let max = score[0];
    for (let i = 0; i < score.length; i++) {
        if (max < score[i]) {
            max = score[i];
        }
    }
    return max;
}

//bai 2
function tryRemoveFromArray(array, x) {
    for (let i = 0; i < array.length; i++) {
        while (array.indexOf(x) != -1) {
            array.splice(array.indexOf(x), 1);
        }
        return array;
    }
}

//bai 3
function isFibonacci(number) {
    let fi0 = 0;
    let fi1 = 1;
    let temp;
    if (number == fi0 || number == fi1) {
        return true;
    } else {
        for (let i = 1; i <= number; i++) {
            temp = fi0 + fi1;
            if (number === temp) {
                return true;
            } else {
                fi0 = fi1;
                fi1 = temp;
            }
        }
        return false;
    }
}

//bai 4
//lop hinh tron
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
//tao doi tuong hinh tron
let circle = new Circle(10, 10, 100, '#000000');
circle.render(document.getElementById('canvas'));
