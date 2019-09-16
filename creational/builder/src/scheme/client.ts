import Director from "./director";
import BuilderA from "./builders/BuilderA";
import BuilderB from "./builders/BuilderB";

export default class ClientCode {
    doSomething(): void {
        const builderA = new BuilderA();
        const builderB = new BuilderB();
        new Director(builderA).buildWithTwoParts();
        new Director(builderB).buildWithThreeParts();

        console.log('-----------------');
        console.log(builderA.getProduct());
        console.log(builderB.getProduct());
        console.log('-----------------');
    }
}