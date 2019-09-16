import IProductA from "./IProductA";

export default class ProductA1 implements IProductA {
    methodA(): void {
        console.log('ProductA1');
    }
}