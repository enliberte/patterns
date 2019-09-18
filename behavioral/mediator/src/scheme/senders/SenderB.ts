import BaseSender from "./BaseSender";

export default class SenderB extends BaseSender {
    methodB(): void {
        console.log('MethodB');
        this.mediator.notify('B');
    }
}