export default class TreeType {
    name: string;
    color: string;
    texture: string;

    constructor(name: string, color: string, texture: string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    draw(canvas: string, x: number, y: number): void {
        console.log(`Нарисовано дерево ${this.name} c цветом ${this.color}, с текстурой ${this.texture}, c координатами ${x}:${y} на холсте ${canvas}`);
    }

}