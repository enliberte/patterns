import IProduct from "../product/IProduct";

export default interface IProcessor {
    createProduct(): IProduct;
}