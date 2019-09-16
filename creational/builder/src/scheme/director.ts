import IBuilder from "./builders/IBuilder";

export default class Director {
    builder: IBuilder;

    constructor(builder: IBuilder) {
        this.builder = builder;
    }
    buildWithOnePart() {
        this.builder.buildPart1();
    }
    buildWithTwoParts() {
        this.builder.buildPart1();
        this.builder.buildPart2();
    }
    buildWithThreeParts() {
        this.builder.buildPart1();
        this.builder.buildPart2();
        this.builder.buildPart3();
    }
}