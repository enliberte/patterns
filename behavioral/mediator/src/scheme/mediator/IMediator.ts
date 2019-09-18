import SenderTypes from "../senders/SenderTypes";

export default interface IMediator {
    notify(event: string): void;
}