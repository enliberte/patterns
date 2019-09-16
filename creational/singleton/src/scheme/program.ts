import Singleton from "./Singleton";

class Program {
    main() {
        const singleton = Singleton.getInstance();
        console.log(singleton.a);
        console.log(singleton.b);
    }
}

const program = new Program();
program.main();