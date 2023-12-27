export class Product {
  public name: string;
  public price: string;
  public articleNumber: string;
  public description: string;
  public imagePath: string;

  constructor(
    articleNumber: string,
    name: string,
    desc: string,
    imagePath: string,
    price: string
  ) {
    this.price = price;
    this.articleNumber = articleNumber;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
