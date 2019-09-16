import IComponent from "./IComponent";

export default class Leaf implements IComponent {
    method(): void {
        console.log('Leaf method');
    }
}