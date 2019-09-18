import ICommand from "./ICommand";
import IReceiver from "../receiver/IReceiver";

export default abstract class BaseCommand implements ICommand {
    receiver: IReceiver;
    params: any;

    constructor(receiver: IReceiver, params: any) {
        this.receiver = receiver;
        this.params = params;
    }

    abstract execute();
}