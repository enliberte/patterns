import IComponent from "./components/IComponent";

export default class ClientCode {
    doSomething(component: IComponent): void {
        component.method();
    }
}