import BaseDecorator from "./BaseDecorator";

export default class ConcreteDecorator3 extends BaseDecorator {
    method(): void {
        console.log('______________________________');
        super.method();
        console.log('______________________________');
    }
}