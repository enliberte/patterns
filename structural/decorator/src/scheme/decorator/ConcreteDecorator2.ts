import BaseDecorator from "./BaseDecorator";

export default class ConcreteDecorator2 extends BaseDecorator {
    method(): void {
        console.log('..............................');
        super.method();
        console.log('..............................');
    }
}