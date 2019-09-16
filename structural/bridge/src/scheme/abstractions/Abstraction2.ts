import IAbstraction from "./IAbstraction";
import IImplementation from "../implementations/IImplementation";

export default class Abstraction2 implements IAbstraction {
    implementation: IImplementation;

    constructor(implementation: IImplementation) {
        this.implementation = implementation;
    }

    feature1(): void {
        this.implementation.method1();
    }

    feature2(): void {
        this.implementation.method3();
        this.implementation.method5();
    }
}