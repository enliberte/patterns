import IDecorated from "./IDecorated";

export default class Decorated implements IDecorated {
    method(): void {
        console.log('Decorated main method')
    }
}