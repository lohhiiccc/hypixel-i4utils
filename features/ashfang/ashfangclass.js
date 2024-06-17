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
    drawbeam(x, y, z, r, g ,b) {
        renderBeaconBeam(x - 0.5, y - 2 , z - 0.5, r, g , b, true);
    }
    drawBox(x, y, z, r, g, b , a, h){
        if (!Settings.AshfangHitboxToogle) return;
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
       this.blue.forEach((entity) => {
           if (Settings.AshfangBlueToogle)
               this.drawbeam(entity.getX(), entity.getY(), entity.getZ(), 0, 0, 1, 0.5);
           if (Settings.AshfangHitboxToogle)
               this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 0, 0, 1, 0.5, 2);
       })
       this.red.forEach((entity) => {
           if (Settings.AshfangRedToogle)
               this.drawbeam(entity.getX(), entity.getY(), entity.getZ(), 1, 0, 0, 0.5);
           if (Settings.AshfangHitboxToogle)
               this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 1, 0, 0, 0.5, 2);
       })
       this.black.forEach((entity) => {
           if (Settings.AshfangBlackToogle)
               this.drawbeam(entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0, 0.5);
           if (Settings.AshfangHitboxToogle)
               this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 0, 0, 0, 0.5, 2);
       })
       this.bullet.forEach((entity) => {
           if (Settings.AshfangBulletToogle)
               this.drawbeam(entity.getX(), entity.getY(), entity.getZ(), 1, 1, 1, 0.5);
           if (Settings.AshfangHitboxToogle)
               this.drawBox(entity.getX(), entity.getY(), entity.getZ(), 1, 1, 1, 0.5, 2);
       })
    }
}

export default Ashfang;