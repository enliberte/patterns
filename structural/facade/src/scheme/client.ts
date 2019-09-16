import Facade from "./Facade";


export default class ClientCode {
    doSomething(facade: Facade): void {
        facade.feature1();
        facade.feature2();
    }
}