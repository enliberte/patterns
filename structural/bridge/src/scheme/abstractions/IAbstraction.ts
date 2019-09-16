import IImplementation from "../implementations/IImplementation";

export default interface IAbstraction {
    implementation: IImplementation;
    feature1(): void;
    feature2(): void;
}