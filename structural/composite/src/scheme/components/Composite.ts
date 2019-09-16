import IComponent from "./IComponent";

export default class Composite implements IComponent {
    children: IComponent[];

    constructor(children: IComponent[]) {
        this.children = children;
    }

    method(): void {
        console.log('Node method');
        for (let child of this.children) {
            child.method();
        }
    }
}