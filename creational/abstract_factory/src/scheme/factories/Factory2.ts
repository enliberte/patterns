import IFactory from "./IFactory";
import IProductA from "../products/productA/IProductA";
import ProductA2 from "../products/productA/productA2";
import IProductB from "../products/productB/IProductB";
import ProductB2 from "../products/productB/productB2";
import IProductC from "../products/productC/IProductC";
import ProductC2 from "../products/productC/productC2";

export default class Factory2 implements IFactory {
    createProductA(): IProductA {
        return new ProductA2();
    }
    createProductB(): IProductB {
        return new ProductB2();
    }
    createProductC(): IProductC {
        return new ProductC2();
    }
}