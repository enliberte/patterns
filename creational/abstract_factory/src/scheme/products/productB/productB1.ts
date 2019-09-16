import IProductB from "./IProductB";

export default class ProductB1 implements IProductB {
    methodB(): void {
        console.log('ProductB1');
    }
}