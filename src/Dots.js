import { CANVAS_HEIGHT, CANVAS_WIDTH, SECURE_BORDER } from './vars';

const randomNumber = (max) => {
    return Math.floor(Math.random() * (max - SECURE_BORDER * 2 + 1)) + SECURE_BORDER;
};

const compareByXCoord = (dot1, dot2) => {
    if (dot1.x > dot2.x) return 1;
    if (dot1.x < dot2.x) return -1;
    return 0;
};

export default class Dots {
    random (numberOfDots) {
        let n = numberOfDots;
        let arr = [];
        while (n--) {
            arr.push({
                i: (numberOfDots - n),
                x: randomNumber(CANVAS_WIDTH), 
                y: randomNumber(CANVAS_HEIGHT)
            });
        }
    
        return arr;
    }

    cloneAndSort (dots) {
        let d = dots.slice();
        d.sort(compareByXCoord);

        return d;
    }

    static rotate (a, b, c) {
        return (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
    }
}