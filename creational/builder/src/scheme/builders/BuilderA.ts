import IBuilder from "./IBuilder";
import ProductA from "../products/productA";

export default class BuilderA implements IBuilder {
    product: ProductA;

    constructor() {
        this.product = new ProductA();
    }
    buildPart1(): void {
        this.product.partA1 = 'part1';
    }
    buildPart2(): void {
        this.product.partA2 = 'part2';
    }
    buildPart3(): void {
        this.product.partA3 = 'part3'
    }
    getProduct(): ProductA {
        return this.product;
    }
}