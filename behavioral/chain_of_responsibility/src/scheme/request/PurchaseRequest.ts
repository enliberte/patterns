import IAuthorized from "./IAuthorized";
import IPurchaseRequest from "./IPurchaseRequest";
import IPurchase from "./IPurchase";
import ICash from "./ICash";

export default class PurchaseRequest implements IPurchaseRequest {
    authorized: IAuthorized;
    purchase: IPurchase;
    cash: ICash;

    setAuthorized(authorized: IAuthorized) {
        this.authorized = authorized;
    }
    setPurchase(purchase: IPurchase) {
        this.purchase = purchase;
    }
    setCash(cash: ICash) {
        this.cash = cash;
    }
}