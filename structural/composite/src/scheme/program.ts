import ClientCode from "./client";
import Leaf from "./components/Leaf";
import Composite from "./components/Composite";


class Program {
    main() {
        const leaf1 = new Leaf();
        const leaf2 = new Leaf();
        const leaf3 = new Leaf();
        const node = new Composite([leaf1, leaf2]);
        const start = new Composite([node, leaf3]);

        const client = new ClientCode();
        client.doSomething(start);
    }
}

const program = new Program();
program.main();