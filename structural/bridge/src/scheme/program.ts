import ClientCode from "./client";
import IImplementation from "./implementations/IImplementation";
import IAbstraction from "./abstractions/IAbstraction";
import Implementation1 from "./implementations/Implementation1";
import Implementation2 from "./implementations/Implementation2";
import Implementation3 from "./implementations/Implementation3";
import Abstraction1 from "./abstractions/Abstraction1";
import Abstraction2 from "./abstractions/Abstraction2";

class Program {
    main(abstructionNum: number, implementationNum: number) {
        let implementation: IImplementation;
        let abstraction: IAbstraction;

        switch (implementationNum) {
            case 1:
                implementation = new Implementation1();
                break;
            case 2:
                implementation = new Implementation2();
                break;
            case 3:
                implementation = new Implementation3();
                break;
        }
        switch (abstructionNum) {
            case 1:
                abstraction = new Abstraction1(implementation);
                break;
            case 2:
                abstraction = new Abstraction2(implementation);
                break;
        }

        const client = new ClientCode();
        client.doSomething(abstraction);
    }
}

const program = new Program();
program.main(1, 2);
program.main(2, 3);