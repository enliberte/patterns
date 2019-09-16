import IProductA from "../products/productA/IProductA";
import IProductB from "../products/productB/IProductB";
import IProductC from "../products/productC/IProductC";

export default interface IFactory {
    createProductA(): IProductA;
    createProductB(): IProductB;
    createProductC(): IProductC;
}