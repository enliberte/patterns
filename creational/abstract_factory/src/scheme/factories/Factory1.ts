import IFactory from "./IFactory";
import IProductA from "../products/productA/IProductA";
import ProductA1 from "../products/productA/productA1";
import IProductB from "../products/productB/IProductB";
import ProductB1 from "../products/productB/productB1";
import IProductC from "../products/productC/IProductC";
import ProductC1 from "../products/productC/productC1";

export default class Factory1 implements IFactory {
    createProductA(): IProductA {
        return new ProductA1();
    }
    createProductB(): IProductB {
        return new ProductB1();
    }
    createProductC(): IProductC {
        return new ProductC1();
    }
}