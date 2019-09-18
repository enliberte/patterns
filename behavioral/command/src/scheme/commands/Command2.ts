import IReceiver from "../receiver/IReceiver";
import BaseCommand from "./BaseCommand";

export default class Command2 extends BaseCommand {
    params: string;

    execute(): string {
        return this.receiver.operation2(this.params);
    }
}