import ICommand from "../commands/ICommand";

export default interface IInvoker {
    command: ICommand;
    setCommand(command: ICommand): void;
    executeCommand(): void;
}