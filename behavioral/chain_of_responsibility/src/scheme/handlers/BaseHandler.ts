import IHandler from "./IHandler";
import IPurchaseRequest from "../request/IPurchaseRequest";

export default class BaseHandler implements IHandler {
    nextHandler: IHandler;

    constructor(nextHandler?: IHandler) {
        this.nextHandler = nextHandler;
    }

    setNext(handler: IHandler): void {
        this.nextHandler = handler;
    }

    handle(request: IPurchaseRequest): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
    }
}