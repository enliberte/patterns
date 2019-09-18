import IInvoker from "./IInvoker";
import ICommand from "../commands/ICommand";

export default class Invoker implements IInvoker {
    command: ICommand;

    setCommand(command: ICommand): void {
        this.command = command;
    }
    executeCommand(): void {
        this.command.execute();
    }
}