import BaseSender from "./BaseSender";

export default class SenderD extends BaseSender {
    methodD(): void {
        console.log('MethodD');
        this.mediator.notify('D');
    }
}