import { NUMBER_OF_POINT } from './src/constants';
import Canvas from './src/canvas';
import Dots from './src/dots';
import JarvisAlgo from './src/algo';

const el = document.getElementById('cnvs');
const canvas = new Canvas(el);
const dots = new Dots();

const randomDots = dots.random(NUMBER_OF_POINT);
let sortedByX = dots.sortByXCoord(randomDots);

canvas.clearCanvas();
canvas.drawDots(randomDots);

const polygon = JarvisAlgo.run(sortedByX);
canvas.drawPoly(polygon);