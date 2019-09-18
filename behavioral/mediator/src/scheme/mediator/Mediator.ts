import IMediator from "./IMediator";
import SenderA from "../senders/SenderA";
import SenderB from "../senders/SenderB";
import SenderC from "../senders/SenderC";
import SenderD from "../senders/SenderD";

export default class Mediator implements IMediator {
    senderA: SenderA;
    senderB: SenderB;
    senderC: SenderC;
    senderD: SenderD;

    constructor(senderA: SenderA, senderB: SenderB, senderC: SenderC, senderD: SenderD) {
        this.senderA = senderA;
        this.senderB = senderB;
        this.senderC = senderC;
        this.senderD = senderD;

        this.senderA.setMediator(this);
        this.senderB.setMediator(this);
        this.senderC.setMediator(this);
        this.senderD.setMediator(this);
    }

    notify(event: string): void {
        switch (event) {
            case 'A':
                this.reactOnA();
                break;
            case 'B':
                this.reactOnB();
                break;
            case 'C':
                this.reactOnC();
                break;
            case 'D':
                this.reactOnD();
                break;
        }
    }

    reactOnA(): void {
        console.log('Notification from A');
        this.senderB.methodB();
        this.senderC.methodC();
        this.senderD.methodD();
    }
    reactOnB(): void {
        console.log('Notification from B');
        this.senderA.methodA();
        this.senderC.methodC();
        this.senderD.methodD();
    }
    reactOnC(): void {
        console.log('Notification from C');
        this.senderA.methodA();
        this.senderB.methodB();
        this.senderD.methodD();
    }
    reactOnD(): void {
        console.log('Notification from D');
        this.senderA.methodA();
        this.senderB.methodB();
        this.senderC.methodC();
    }
}