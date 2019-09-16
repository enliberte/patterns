import ClientCode from "./client";
import Facade from "./Facade";


class Program {
    main() {
        const facade = new Facade();
        const client = new ClientCode();
        client.doSomething(facade);
    }
}

const program = new Program();
program.main();