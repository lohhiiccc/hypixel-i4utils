
import RenderLib from "../../../RenderLib/index";

class Renderer_dev {
    constructor(xCoords, yCoords, zCoord) {
        this.blocks = [];

        for (let i = 0; i < xCoords.length; i++) {
            for (let j = 0; j < yCoords.length; j++) {
                const block = new Block(xCoords[i], yCoords[j], zCoord);
                this.blocks.push(block);
            }
        }
    }

    draw() {
        this.blocks.forEach(block => {
            const isEmerald = block.isEmeraldBlock();
            const color = isEmerald ? { r: 0, g: 1, b: 0 } : { r: 1, g: 0, b: 0 };
            RenderLib.drawInnerEspBox(block.x + 0.5, block.y - 0.05, block.z + 0.5, 1.1, 1.1, color.r, color.g, color.b, 1, false);
        });
    }
}

export default Renderer_dev;
