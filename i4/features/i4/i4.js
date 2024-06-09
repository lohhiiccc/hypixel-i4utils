import RenderLib from "../../../RenderLib"
import Settings from "../../config";

class arrowdevice {
    constructor(xCoords, yCoords, zCoord) {
        this.xCoords = xCoords;
        this.yCoords = yCoords;
        this.zCoord = zCoord;
        this.tab = [0, 0, 0 ,0 ,0 ,0, 0, 0, 0];
        this.running = false
    }

    getrunning()
    {
        return this.running;
    }
    reset()
    {
        this.running = false;
        this.tab = [0, 0, 0 ,0 ,0 ,0, 0, 0, 0];
    }
    draw() {
        let index = 0;
        this.xCoords.forEach((x, indexX) => {
            this.yCoords.forEach((y, indexY) => {
                const block = World.getBlockAt(x, y, this.zCoord);
                const blockType = block.getType().toString();

                const isEmerald = blockType.includes("emerald");

                let color;
                if (isEmerald) {
                    color = { r: Settings.tagetColor.getRed() / 255, g: Settings.tagetColor.getGreen() / 255, b: Settings.tagetColor.getBlue() / 255 };
                    this.tab[index] = 1
                    this.running = true;
                } else {
                    color = { r: Settings.otherTarget.getRed() / 255, g: Settings.otherTarget.getGreen() / 255, b: Settings.otherTarget.getBlue() / 255 };
                    if (this.tab[index] === 1)
                        color = { r: Settings.oldTagetColor.getRed() / 255, g: Settings.oldTagetColor.getGreen() / 255, b: Settings.oldTagetColor.getBlue() / 255};
                }
                index++;
                RenderLib.drawInnerEspBox(x + 0.5, y - 0.05, this.zCoord + 0.5, 1.1, 1.1, color.r, color.g, color.b, 1, false);
            });
        });
    }
}

const xCoords = [68, 66, 64];
const yCoords = [130, 128, 126];
const zCoord = 50;

const device = new arrowdevice(xCoords, yCoords, zCoord);

register("renderWorld", () => {

    Scoreboard.getLines().forEach(line => {
    if ((ChatLib.removeFormatting(line).includes("(M7)") || ChatLib.removeFormatting(line).includes("(F7)")) && Settings.deviceTooglemain)  {
        const pressure_plate = World.getBlockAt(63, 127, 35);
        if (pressure_plate.isPowered() === false && device.getrunning() === true) {
            device.reset();
        }
        device.draw();
    }
    });

})

register("command", () => {
    device.reset();
}).setName("reseti4");