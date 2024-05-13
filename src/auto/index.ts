import { Dealer } from "./Dealer.js";

const bandis = new Dealer("Al Bundy", "EUR");

console.log(bandis.getCar("Volvo", 15_000));
console.log(bandis.getCar("Vokswagen Passat", 20_000));
console.log(bandis.getCar("Toyota", 17_500));
console.log(bandis.getCar("Mazda", 10_500));
