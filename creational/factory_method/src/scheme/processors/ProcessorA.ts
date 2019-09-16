import IProcessor from "./IProcessor";
import ProductA from "../product/ProductA";
import IProduct from "../product/IProduct";

export default class ProcessorA implements IProcessor {
    doSomeAnotherStaff() {
        console.log('doSomeAnotherStaff');
    }

    createProduct(): IProduct {
        return new ProductA();
    }
}