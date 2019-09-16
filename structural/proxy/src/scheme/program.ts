import ClientCode from "./client";
import Service from "./service/Service";
import ProxyService from "./ProxyService";


class Program {
    main() {
        const service = new Service();
        const proxyService = new ProxyService(service);
        const client = new ClientCode();
        client.doSomething(proxyService);
    }
}

const program = new Program();
program.main();