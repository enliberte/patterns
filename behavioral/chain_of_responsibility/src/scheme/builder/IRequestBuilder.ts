import IAuthorized from "../request/IAuthorized";
import ICash from "../request/ICash";
import IPurchase from "../request/IPurchase";

export default interface IRequestBuilder {
    buildAuthorized(authorized: IAuthorized): void;
    buildCash(cash: ICash): void;
    buildPurchase(purchase: IPurchase): void;
}