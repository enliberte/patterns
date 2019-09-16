import IProduct from "./IProduct";

export default class ProductA implements IProduct {
    doStuff(): void {
        console.log('ProductA instance does stuff');
    }
}