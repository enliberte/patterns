import BaseHandler from "./BaseHandler";
import IPurchaseRequest from "../request/IPurchaseRequest";

export default class AuthorizationHandler extends BaseHandler {
    handle(request: IPurchaseRequest): void {
        if (request.authorized.authorized) {
            super.handle(request);
        } else {
            console.log('Not authorized')
        }
    }
}