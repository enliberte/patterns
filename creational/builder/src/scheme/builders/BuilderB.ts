import IBuilder from "./IBuilder";
import ProductB from "../products/productB";

export default class BuilderB implements IBuilder {
    product: ProductB;

    constructor() {
        this.product = new ProductB();
    }
    buildPart1(): void {
        this.product.partB1 = 1;
    }
    buildPart2(): void {
        this.product.partB2 = 2;
    }
    buildPart3(): void {
        this.product.partB3 = 3;
    }
    getProduct(): ProductB {
        return this.product;
    }
}