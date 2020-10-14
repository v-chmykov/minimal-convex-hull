import Dots from './dots';

export default class JarvisAlgo {
    static run (dots) {
        const initialDot = dots[0];
        let buffer = [];
        buffer.push(initialDot);
        dots.splice(0, 1);
        dots.push(initialDot);

        while (true) {
            let right = 0;
            let last = buffer[buffer.length - 1];
            for (let i = 1, len = dots.length; i < len; i++) {
                if (Dots.rotate(last, dots[right], dots[i]) < 0) {
                    right = i;
                }
            }

            if (dots[right] == buffer[0]) {
                break;
            } else {
                buffer.push(dots[right]);
                dots.splice(right, 1);
            }
        }

        buffer.push(initialDot);

        return buffer;
    }
}