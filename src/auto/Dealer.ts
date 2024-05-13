export class Dealer {
  public currency: string;

  constructor(name: string, currency: string) {
    this.currency = currency;
    console.log(`Hi, my name is ${name}!`);
  }

  formatedPrice(price: number) {
    // 5 -> 5 Eur
    // 50 -> 50 Eur
    // 500 -> 500 Eur
    // 1500 -> 1.500 Eur
    // 1050 -> 1.050 Eur
    // 1005 -> 1.005 Eur
    return price + " " + this.currency;
  }

  getCar(model: string, price: number) {
    return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
  }
}
