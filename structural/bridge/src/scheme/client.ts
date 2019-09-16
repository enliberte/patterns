import IAbstraction from "./abstractions/IAbstraction";

export default class ClientCode {
    doSomething(abstraction: IAbstraction): void {
        abstraction.feature1();
        abstraction.feature2();
    }
}