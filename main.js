import { strictEquals } from './helpers.js';

strictEquals(1, 1); //true
strictEquals(NaN, NaN); // false
strictEquals(0, -0); // true
strictEquals(-0, 0); //true
strictEquals(1, '1'); // false
strictEquals(true, false); //false
strictEquals(false, false); //true
strictEquals('water', 'oil'); //false
