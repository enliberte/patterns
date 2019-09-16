import IProcessor from "./processors/IProcessor";

export default class ClientCode {
    processor: IProcessor;

    constructor(processor: IProcessor) {
        this.processor = processor;
    }

    doSomething(): void {
        console.log('-----------------');
        const product = this.processor.createProduct();
        product.doStuff();
        console.log('-----------------');
    }
}