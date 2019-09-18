import IMediator from "../mediator/IMediator";
import BaseSender from "./BaseSender";

export default class SenderA extends BaseSender {
    methodA(): void {
        console.log('MethodA');
        this.mediator.notify('A');
    }
}