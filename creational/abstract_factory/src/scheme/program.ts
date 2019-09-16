import IFactory from "./factories/IFactory";
import Factory1 from "./factories/Factory1";
import Factory2 from "./factories/Factory2";
import Factory3 from "./factories/Factory3";
import ClientCode from "./client";

class Program {
    main(factoryType: number) {
        let factory: IFactory;
        switch (factoryType) {
            case 1:
                factory = new Factory1();
                break;
            case 2:
                factory = new Factory2();
                break;
            default:
                factory = new Factory3();
        }
        const client = new ClientCode(factory);
        client.doSomething();
    }
}

const program = new Program();
program.main(1);
program.main(2);
program.main(3);