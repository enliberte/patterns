import IProduct from "./IProduct";

export default class ProductB implements IProduct {
    doStuff(): void {
        console.log('ProductA instance does stuff');
    }
}