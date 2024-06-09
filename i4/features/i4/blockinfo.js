// BlockInfo.js
class Block {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.block = World.getBlockAt(x, y, z);
    }

    getType() {
        return this.block.getType().toString();
    }

    isEmerald() {
        return this.getType().includes("emerald");
    }

    getColor() {
        return this.isEmerald() ? { r: 0, g: 1, b: 0 } : { r: 1, g: 1, b: 1 };
    }

    getPosition() {
        return { x: this.x, y: this.y, z: this.z };
    }
}
