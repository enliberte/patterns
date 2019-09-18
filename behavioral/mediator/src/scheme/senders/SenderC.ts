import BaseSender from "./BaseSender";

export default class SenderC extends BaseSender {
    methodC(): void {
        console.log('MethodC');
        this.mediator.notify('C');
    }
}