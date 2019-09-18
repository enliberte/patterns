import Command1 from "./commands/Command1";
import Receiver from "./receiver/Receiver";
import Command2 from "./commands/Command2";
import Invoker from "./invoker/Invoker";

export default class ClientCode {
    doSomething(): void {
        const command1 = new Command1(new Receiver(), 1);
        const command2 = new Command2(new Receiver(), 'hello');

        const invoker1 = new Invoker();
        invoker1.setCommand(command1);
        const invoker2 = new Invoker();
        invoker2.setCommand(command2);

        console.log('-----------------');
        console.log(invoker1.executeCommand());
        console.log(invoker2.executeCommand());
        console.log('-----------------');
    }
}