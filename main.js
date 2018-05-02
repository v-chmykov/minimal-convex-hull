import { NUMBER_OF_POINT } from './src/vars';
import Canvas from './src/Canvas';
import Dots from './src/Dots';
import JarvisAlgo from './src/JarvisAlgo';

const el = document.getElementById('cnvs');
const canvas = new Canvas(el);
const dots = new Dots();

const origin = dots.random(NUMBER_OF_POINT);
let sorted = dots.cloneAndSort(origin);

canvas.clearCanvas();
canvas.drawDots(origin);

const dotsForPoly = JarvisAlgo.run(sorted);
canvas.drawPoly(dotsForPoly);