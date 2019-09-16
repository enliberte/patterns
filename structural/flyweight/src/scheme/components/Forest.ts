import Tree from "./Tree";
import TreeFactory from "../factory/TreeFactory";

export default class Forest {
    trees: Tree[];

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const treeType = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, treeType);
        this.trees.push(tree);
    }
    draw(canvas) {
        for (let tree of this.trees) {
            tree.draw(canvas);
        }
    }

}