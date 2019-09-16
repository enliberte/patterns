import IService from "./service/IService";

export default class ClientCode {
    doSomething(service: IService): void {
        service.method();
    }
}