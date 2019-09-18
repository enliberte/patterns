import IAuthorized from "./IAuthorized";

export default class Authorized implements IAuthorized {
    authorized: boolean;

    constructor(authorized: boolean) {
        this.authorized = authorized;
    }
}