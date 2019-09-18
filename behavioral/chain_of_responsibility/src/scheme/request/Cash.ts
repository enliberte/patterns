import ICash from "./ICash";

export default class Cash implements ICash {
    cash: number;

    constructor(cash: number) {
        this.cash = cash;
    }

    setCash(cash: number): void {
        this.cash = cash;
    }
}