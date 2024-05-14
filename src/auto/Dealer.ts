type Car = {
  model: string;
  price: number;
};

export class Dealer {
  public name: string;
  public currency: string;
  public allCars: Car[];

  constructor(name: string, currency: string) {
    this.currency = currency;
    this.name = name;
    this.allCars = [];
    console.log(`Hi, my name is ${name}!`);
  }

  formatedPrice(price: number) {
    return price.toLocaleString("de-DE", {
      style: "currency",
      currency: this.currency,
    });
  }

  getCar(model: string, price: number) {
    this.allCars.push({ model, price });
    return `New car everyone! ${model} for only ${this.formatedPrice(price)}!`;
  }

  carList() {
    let result = [`${this.name}\'s car dealership:`];

    for (let i = 0; i < this.allCars.length; i++) {
      const car = this.allCars[i];
      const price = this.formatedPrice(car.price);
      const ending = i < this.allCars.length - 1 ? ";" : ".";
      result.push(`${i + 1}) ${car.model}: ${price}${ending}`);
    }

    const count = Math.max(...result.map((row) => row.length));
    result.splice(1, 0, "=".repeat(count));

    return result.join("\r\n");
  }

  changeCarPrice(id: number, newPrice: number) {
    if (id < 1) {
      return "ERROR: id is too low.";
    }
    if (id > this.allCars.length) {
      return "ERROR: id is too big.";
    }

    const car = this.allCars[id - 1];
    car.price = newPrice;
    return `New ${car.model} price is ${this.formatedPrice(newPrice)}.`;
  }
}
