import IProduct from "./product/IProduct";
import ProcessorA from "./processors/ProcessorA";
import ProcessorB from "./processors/ProcessorB";
import IProcessor from "./processors/IProcessor";
import ClientCode from "./client";

class Program {
    main(productType: string) {
        let processor: IProcessor;
        switch (productType) {
            case 'A':
                processor = new ProcessorA();
                break;
            default:
                processor = new ProcessorB();
        }
        const client = new ClientCode(processor);
        client.doSomething();
    }
}

const program = new Program();
program.main('A');
program.main('B');