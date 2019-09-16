import IProcessor from "./IProcessor";
import ProductB from "../product/ProductB";
import IProduct from "../product/IProduct";

export default class ProcessorB implements IProcessor {
    doSomeStaff() {
        console.log('doSomeStaff');
    }

    createProduct(): IProduct {
        return new ProductB();
    }
}