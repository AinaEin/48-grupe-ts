"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dealer_js_1 = require("./Dealer.js");
const bandis = new Dealer_js_1.Dealer("Al Bundy", "EUR");
console.log(bandis.getCar("Volvo", 15_000));
console.log(bandis.getCar("Vokswagen Passat", 20_000));
console.log(bandis.getCar("Toyota", 17_500));
console.log(bandis.getCar("Mazda", 10_500));
console.log(bandis.carList());
console.log(bandis.changeCarPrice(1, 17_300));
// New Volvo price is 17.300 EUR.
console.log(bandis.changeCarPrice(2, 19_500));
// New Vokswagen Passat price is 19.500 EUR.
console.log(bandis.carList());
console.log(bandis.sellCar(1));
// Wow! Volvo sold for 17.300 EUR!
console.log(bandis.sellCar(5));
// SORRY! There is no such car for sale :(
console.log(bandis.sellCar(2));
// Wow! Toyota sold for 17.500 EUR!
