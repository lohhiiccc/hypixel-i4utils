// Renderer.js

import RenderLib from "../../../RenderLib/index";
import BlockInfo from "./blockinfo"; // Chemin relatif à ajuster selon votre structure de fichiers

class Renderer {
    constructor(xCoords, yCoords, zCoord) {
        this.blocks = [];

        // Créer une instance Block pour chaque paire de coordonnées
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

            // Dessine la boîte ESP en utilisant la couleur déterminée
            RenderLib.drawInnerEspBox(block.x + 0.5, block.y - 0.05, block.z + 0.5, 1.1, 1.1, color.r, color.g, color.b, 1, false);
        });
    }
}

export default Renderer;