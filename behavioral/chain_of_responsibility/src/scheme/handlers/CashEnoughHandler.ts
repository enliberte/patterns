import BaseHandler from "./BaseHandler";
import IPurchaseRequest from "../request/IPurchaseRequest";

export default class CashEnoughHandler extends BaseHandler {
    handle(request: IPurchaseRequest): void {
        if (request.cash.cash >= request.purchase.cost) {
            super.handle(request);
        } else {
            console.log('Not enough money');
        }
    }
}