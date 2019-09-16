import Forest from "./components/Forest";

class Program {
    main() {
        const forest = new Forest();
        for (let i: number; i < 10000; i++) {
            forest.plantTree(Math.random(), Math.random(), 'Дуб', 'Green', 'strong')
        }
        forest.draw('Древняя Русь')
    }
}

const program = new Program();
program.main();