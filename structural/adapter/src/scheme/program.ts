import ClientCode from "./client";
import Adapter from "./adapter";
import {Service} from "./service/Service";

class Program {
    main() {
        const adapter = new Adapter(new Service());
        const client = new ClientCode();
        client.doSomething(adapter);
    }
}

const program = new Program();
program.main();