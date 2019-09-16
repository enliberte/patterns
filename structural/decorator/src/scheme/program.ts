import ClientCode from "./client";
import Decorated from "./decorated/Decorated";
import IDecorated from "./decorated/IDecorated";
import ConcreteDecorator1 from "./decorator/ConcreteDecorator1";
import ConcreteDecorator2 from "./decorator/ConcreteDecorator2";
import ConcreteDecorator3 from "./decorator/ConcreteDecorator3";


class Program {
    main(decorators: number[]) {
        let decorated: IDecorated = new Decorated();
        for (let decorator of decorators) {
            switch (decorator) {
                case 1:
                    decorated = new ConcreteDecorator1(decorated);
                    break;
                case 2:
                    decorated = new ConcreteDecorator2(decorated);
                    break;
                case 3:
                    decorated = new ConcreteDecorator3(decorated);
                    break;
            }
        }

        const client = new ClientCode();
        client.doSomething(decorated);
    }
}

const program = new Program();
program.main([1, 2, 3]);
program.main([2]);
program.main([]);