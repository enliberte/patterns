import IReceiver from "./IReceiver";

export default class Receiver implements IReceiver {
    operation1(arg: number): number {
        return arg + 1;
    }
    operation2(arg: string): string {
        return arg.toUpperCase();
    }
}