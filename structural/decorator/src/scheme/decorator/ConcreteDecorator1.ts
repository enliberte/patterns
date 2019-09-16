import BaseDecorator from "./BaseDecorator";

export default class ConcreteDecorator1 extends BaseDecorator {
    method(): void {
        console.log('------------------------------');
        super.method();
        console.log('------------------------------');
    }
}