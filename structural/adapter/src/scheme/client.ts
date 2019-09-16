import IClient from "./client/IClient";

export default class ClientCode {
    doSomething(client: IClient): void {
        console.log('-----------------');
        console.log(client.methodB(123));
        console.log('-----------------');
    }
}