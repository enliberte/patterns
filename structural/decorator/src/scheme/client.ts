import IDecorated from "./decorated/IDecorated";


export default class ClientCode {
    doSomething(component: IDecorated): void {
        component.method();
    }
}