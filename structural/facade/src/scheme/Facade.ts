import ComponentA from "./complicated_system/ComponentA";
import ComponentB from "./complicated_system/ComponentB";
import ComponentC from "./complicated_system/ComponentC";

export default class Facade {
    feature1(): void {
        const componentA = new ComponentA();
        const componentB = new ComponentB();

        componentA.method1();
        componentA.method2();
        componentB.method4();
        componentA.method5();
        componentB.method3();
    }

    feature2(): void {
        const componentA = new ComponentA();
        const componentC = new ComponentC();

        componentA.method5();
        componentA.method3();
        componentC.method1();
        componentC.method2();
        componentC.method3();
    }
}