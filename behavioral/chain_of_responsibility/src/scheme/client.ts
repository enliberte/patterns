import PurchaseRequest from "./request/PurchaseRequest";
import RequestBuilder from "./builder/RequestBuilder";
import RequestDirector from "./builder/RequestDirector";
import AuthorizationHandler from "./handlers/AuthorizationHandler";
import CashHandler from "./handlers/CashHandler";
import CashEnoughHandler from "./handlers/CashEnoughHandler";

export default class ClientCode {
    doSomething(): void {
        const builder1 = new RequestBuilder();
        const director1 = new RequestDirector(builder1);
        director1.buildUnauthorizedRequest();

        const builder2 = new RequestBuilder();
        const director2 = new RequestDirector(builder2);
        director2.buildNotEnoughMoneyRequest();

        const builder3 = new RequestBuilder();
        const director3 = new RequestDirector(builder3);
        director3.buildNotEnoughMoneyRequest();

        const buy = new CashHandler();
        const checkCash = new CashEnoughHandler(buy);
        const auth = new AuthorizationHandler(checkCash);

        console.log('-----------------');
        console.log('Unauthorized');
        auth.handle(builder1.getRequest());
        console.log('-----------------');

        console.log('-----------------');
        console.log('Not enough money');
        auth.handle(builder1.getRequest());
        console.log('-----------------');

        console.log('-----------------');
        console.log('OK');
        auth.handle(builder1.getRequest());
        console.log('-----------------');
    }
}