import ClientCode from "./client";


class Program {
    main() {
        const client = new ClientCode();
        client.doSomething();
    }
}

const program = new Program();
program.main();