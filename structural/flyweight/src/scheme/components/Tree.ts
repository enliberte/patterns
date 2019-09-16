import TreeType from "../flyweight/TreeType";

export default class Tree {
    x: number;
    y: number;
    treeType: TreeType;

    constructor(x: number, y: number, treeType: TreeType) {
        this.x = x;
        this.y = y;
        this.treeType = treeType;
    }
    draw(canvas: string) {
        this.treeType.draw(canvas, this.x, this.y);
    }

}