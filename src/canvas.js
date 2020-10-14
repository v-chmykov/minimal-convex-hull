import { 
    LEGEND_POSITION, 
    ORIGIN_DOT_COLOR, 
    ORIGIN_DOT_SIZE, 
    POLY_DOT_COLOR, 
    POLY_DOT_SIZE 
} from './constants'

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
        this.ctx.fillStyle = ORIGIN_DOT_COLOR;
        const sizeShift = (ORIGIN_DOT_SIZE - 1) / 2;

        for (let i = 0, len = dots.length; i < len; i++) {
            const dot = dots[i];

            this.ctx.fillRect(
                dot.x - sizeShift, 
                dot.y - sizeShift, 
                ORIGIN_DOT_SIZE, 
                ORIGIN_DOT_SIZE
            );

            this.ctx.fillText(
                dot.i, 
                dot.x + LEGEND_POSITION.x, 
                dot.y + LEGEND_POSITION.y
            );
        }
    }

    drawPoly (dots) {
        let initial = dots.shift();
        const sizeShift = (ORIGIN_DOT_SIZE - 1) / 2;
    
        this.ctx.beginPath();
        this.ctx.strokeStyle = POLY_DOT_COLOR;
        this.ctx.fillStyle = POLY_DOT_COLOR;
        this.ctx.fillRect(
            initial.x - sizeShift, 
            initial.y - sizeShift, 
            POLY_DOT_SIZE, 
            POLY_DOT_SIZE
        );
    
        this.ctx.moveTo(initial.x, initial.y);
        for (let i = 0, len = dots.length; i < len; i++) {
            let dot = dots[i];
            this.ctx.lineTo(dot.x, dot.y);
            this.ctx.fillRect(
                dot.x - sizeShift, 
                dot.y - sizeShift, 
                POLY_DOT_SIZE, 
                POLY_DOT_SIZE
            );
        }
        
        this.ctx.closePath();
        this.ctx.stroke();
    }
}