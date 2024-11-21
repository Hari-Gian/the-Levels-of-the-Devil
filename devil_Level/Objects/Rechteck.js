import {ctx} from "../canvas";

export class Rechteck {
    constructor(options) {
        this.pos = options.pos;
        this.size = options.size;
        this.color = options.color;
        this.type = "Rechteck";
    }

    get left() {
        return this.pos[0];
    }

    get right() {
        return this.pos[0] + this.size[0];
    }

    get top() {
        return this.pos[1];
    }

    get bottom() {
        return this.pos[1] + this.size[1];
    }

    setLeft(value) {
        this.pos[0] = value;
    }

    setRight(value) {
        this.pos[0] = value - this.size[0];
    }

    setTop(value) {
        this.pos[1] = value;
    }

    setBottom(value) {
        this.pos[1] = value - this.size[1];
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    }
}