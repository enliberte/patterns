import TreeType from "../flyweight/TreeType";

export default class TreeFactory {
    static treeTypes: TreeType[];
    static getTreeType(name: string, color: string, texture: string) {
        let cachedTreeType: TreeType;
        for (let treeType of this.treeTypes) {
            if (treeType.name === name && treeType.color === color && treeType.texture === texture) {
                cachedTreeType = treeType;
            }
        }
        if (!cachedTreeType) {
            cachedTreeType = new TreeType(name, color, texture);
            this.treeTypes.push(cachedTreeType);
        }
        return cachedTreeType;
    }
}