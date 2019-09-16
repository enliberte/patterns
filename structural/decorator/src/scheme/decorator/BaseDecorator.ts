import IDecorated from "../decorated/IDecorated";

export default class BaseDecorator implements IDecorated {
    private decorated: IDecorated;

    constructor(decorated: IDecorated) {
        this.decorated = decorated;
    }

    method(): void {
        this.decorated.method();
    }
}