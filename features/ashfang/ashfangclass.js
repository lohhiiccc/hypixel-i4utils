import renderBeaconBeam from "../../../BeaconBeam/index"
import RenderLib from "../../../RenderLib/index";
import Settings from "../../config";


class Ashfang {
    constructor() {
        this.blue = [];
        this.red = [];
        this.black = [];
        this.bullet = [];
    }
    drawBox(x, y, z, r, g, b , a, h){
        renderBeaconBeam(x - 0.5, y - 2 , z - 0.5, r, g , b, true);
        RenderLib.drawInnerEspBox(x, y - h, z , 1, h, r, g, b, a, false);
        RenderLib.drawEspBox(x - 0.1, y - h - 0.05, z , 1.1, h + 0.1, 1, 1, 1, 1, false);
    }
    inAera()
    {
        let line = Scoreboard.getLines()[7];
        if (ChatLib.removeFormatting(line).includes("Ashfang"))
            return true;
        return false;
    }
    render() {
        if (Settings.AshfangHitboxToogle)
            RenderLib.drawEspBox(-484 -0.5, 135 , -1016 +0.5, 2, 3, 1, 1, 1, 1, true);
        if (Settings.AshfangBlueToogle) {
            this.blue.forEach((entity) => {
                this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 0, 0, 1, 0.5, 2);
            })
        }
        if (Settings.AshfangRedToogle) {
            this.red.forEach((entity) => {
                this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 1, 0, 0, 0.5, 2);
            })
        }
        if (Settings.AshfangBlackToogle) {
            this.black.forEach((entity) => {
                this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0, 0.5, 2);
            })
        }
        if (Settings.AshfangBulletToogle) {
            this.bullet.forEach((entity) => {
                this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 1, 1, 1, 0.5, 1);
            })
        }

    }
}

export default Ashfang;