const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const WARNING = 'WARNING';

const location = 'RSA'; // User's location
const currency = 'R';   // User's currency
const customers = 1;    // Number of customers

let shipping = 0;
let totalCost = 0;

if (location === 'RSA') {
    shipping = 400;
} else if (location === 'NAM') {
    shipping = 600;
} else if (location !== 'NK') {
    shipping = 800;
} else {
    console.log(BANNED_WARNING);
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;  // Assuming 'NONE_SELECTED' means 0
const batteries = 35 * 2;
const pens = 5 * 0;      // Assuming 'NONE_SELECTED' means 0

totalCost = shoes + toys + shirts + batteries + pens;

if ((totalCost >= 1000) && (customers === 1)) {
    if ((location === 'RSA' || location === 'NAM')) {
        shipping = 0;
    } else {
        console.log(FREE_WARNING);
    }
}

if (shipping === 0 && customers !== 1) {
    console.log(WARNING);
}

if (location !== 'NK') {
    console.log('Price:', currency, totalCost + shipping);
}
