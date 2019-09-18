import IReceiver from "../receiver/IReceiver";
import BaseCommand from "./BaseCommand";

export default class Command1 extends BaseCommand {
    params: number;

    execute(): number {
        return this.receiver.operation1(this.params);
    }
}