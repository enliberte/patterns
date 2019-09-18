import IPurchase from "./IPurchase";

export default class Purchase implements IPurchase {
    cost: number;

    constructor(cost: number) {
        this.cost = cost;
    }
}