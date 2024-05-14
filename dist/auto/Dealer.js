"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
class Dealer {
    currency;
    constructor(name, currency) {
        this.currency = currency;
        console.log(`Hi, my name is ${name}!`);
    }
    formatedPrice(price) {
        // 5 -> 5 Eur
        // 50 -> 50 Eur
        // 500 -> 500 Eur
        // 1500 -> 1.500 Eur
        // 1050 -> 1.050 Eur
        // 1005 -> 1.005 Eur
        let formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return price + " " + this.currency;
    }
    getCar(model, price) {
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }
}
exports.Dealer = Dealer;
