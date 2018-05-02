// Canvas manipulation
export default class Canvas {
    constructor (el) {
        this.el = el;
        this.ctx = el.getContext("2d");
    }

    clearCanvas () {
        this.ctx.clearRect(0, 0, this.el.width, this.el.height);
    }

    drawDots (dots) {
        this.ctx.fillStyle = 'blue';
        for (let i = 0, len = dots.length; i < len; i++) {
            const dot = dots[i];
            this.ctx.fillRect(dot.x - 1, dot.y - 1, 3, 3);
            this.ctx.fillText(dot.i, dot.x + 5, dot.y - 5);
        }
    }

    drawPoly (dots) {
        let initial = dots.shift();
    
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'red';
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(initial.x - 2, initial.y - 2, 5, 5);
    
        this.ctx.moveTo(initial.x, initial.y);
        for (let i = 0, len = dots.length; i < len; i++) {
            let dot = dots[i];
            this.ctx.lineTo(dot.x, dot.y);
            this.ctx.fillRect(dot.x - 2, dot.y - 2, 5, 5);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }
}