import IAuthorized from "./IAuthorized";
import IPurchase from "./IPurchase";
import ICash from "./ICash";

export default interface IPurchaseRequest {
    authorized: IAuthorized;
    purchase: IPurchase;
    cash: ICash;
    setAuthorized(authorized: IAuthorized): void;
    setPurchase(purchase: IPurchase): void;
    setCash(cash: ICash): void;
}