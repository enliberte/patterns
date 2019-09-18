import BaseHandler from "./BaseHandler";
import IPurchaseRequest from "../request/IPurchaseRequest";

export default class CashHandler extends BaseHandler {
    handle(request: IPurchaseRequest): void {
        const newBalance = request.cash.cash - request.purchase.cost;
        request.cash.setCash(newBalance);
        console.log('Thanks for purchase');
        super.handle(request);
    }
}