import SenderA from "./senders/SenderA";
import SenderB from "./senders/SenderB";
import SenderC from "./senders/SenderC";
import SenderD from "./senders/SenderD";
import Mediator from "./mediator/Mediator";

export default class ClientCode {
    doSomething(): void {
        console.log('-----------------');
        const senderA = new SenderA();
        const senderB = new SenderB();
        const senderC = new SenderC();
        const senderD = new SenderD();

        new Mediator(senderA, senderB, senderC, senderD);
        senderA.methodA();
        senderB.methodB();
        senderC.methodC();
        senderD.methodD();
        console.log('-----------------');
    }
}