import IMediator from "../mediator/IMediator";

export default interface ISender {
    setMediator(mediator: IMediator): void;
}