import IRequestBuilder from "./IRequestBuilder";
import IPurchaseRequest from "../request/IPurchaseRequest";
import IAuthorized from "../request/IAuthorized";
import ICash from "../request/ICash";
import IPurchase from "../request/IPurchase";
import PurchaseRequest from "../request/PurchaseRequest";

export default class RequestBuilder implements IRequestBuilder {
    request: IPurchaseRequest;

    constructor() {
        this.request = new PurchaseRequest();
    }

    buildAuthorized(authorized: IAuthorized): void {
        this.request.setAuthorized(authorized);
    }
    buildCash(cash: ICash): void {
        this.request.setCash(cash);
    }
    buildPurchase(purchase: IPurchase): void {
        this.request.setPurchase(purchase);
    }
    getRequest(): IPurchaseRequest {
        return this.request;
    }
}