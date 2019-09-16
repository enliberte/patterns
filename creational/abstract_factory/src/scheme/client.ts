import IFactory from "./factories/IFactory";

export default class ClientCode {
    factory: IFactory;

    constructor(factory: IFactory) {
        this.factory = factory;
    }

    doSomething(): void {
        console.log('-----------------');
        const productA = this.factory.createProductA();
        const productB = this.factory.createProductB();
        const productC = this.factory.createProductC();
        productA.methodA();
        productB.methodB();
        productC.methodC();
        console.log('-----------------');
    }
}