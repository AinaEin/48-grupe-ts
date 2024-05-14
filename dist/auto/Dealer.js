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
        // let formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return price.toLocaleString('de-DE', {
            style: "currency",
            currency: this.currency
        });
    }
    getCar(model, price) {
        return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
    }
}
exports.Dealer = Dealer;
