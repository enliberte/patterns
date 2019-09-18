import IRequestBuilder from "./IRequestBuilder";
import IPurchaseRequest from "../request/IPurchaseRequest";
import Authorized from "../request/Authorized";
import Purchase from "../request/Purchase";
import Cash from "../request/Cash";

export default class RequestDirector {
    builder: IRequestBuilder;

    constructor(builder: IRequestBuilder) {
        this.builder = builder;
    }

    buildUnauthorizedRequest(): void {
        this.builder.buildAuthorized(new Authorized(false));
        this.builder.buildPurchase(new Purchase(100));
        this.builder.buildCash(new Cash(50));
    }
    buildNotEnoughMoneyRequest(): void {
        this.builder.buildAuthorized(new Authorized(true));
        this.builder.buildPurchase(new Purchase(100));
        this.builder.buildCash(new Cash(50));
    }
    buildOKRequest(): void {
        this.builder.buildAuthorized(new Authorized(true));
        this.builder.buildPurchase(new Purchase(100));
        this.builder.buildCash(new Cash(200));
    }
}