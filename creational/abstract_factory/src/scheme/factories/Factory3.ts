import IFactory from "./IFactory";
import IProductA from "../products/productA/IProductA";
import ProductA3 from "../products/productA/productA3";
import IProductB from "../products/productB/IProductB";
import ProductB3 from "../products/productB/productB3";
import IProductC from "../products/productC/IProductC";
import ProductC3 from "../products/productC/productC3";

export default class Factory3 implements IFactory {
    createProductA(): IProductA {
        return new ProductA3();
    }
    createProductB(): IProductB {
        return new ProductB3();
    }
    createProductC(): IProductC {
        return new ProductC3();
    }
}