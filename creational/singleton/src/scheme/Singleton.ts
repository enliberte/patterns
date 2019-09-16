export default class Singleton {
    private static instance: Singleton;
    a: string;
    b: number;

    private constructor() {
        this.a = '1';
        this.b = 1;
    }

    static getInstance(): Singleton {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Singleton();
    }
}