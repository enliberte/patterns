import ISender from "./ISender";
import IMediator from "../mediator/IMediator";

export default class BaseSender implements ISender {
    protected mediator: IMediator;

    setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
}