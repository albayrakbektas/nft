export class Product {
  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.currency = product.currency;
    this.type = product.type;
  }

  get price () {
    return this.price
  }
}
