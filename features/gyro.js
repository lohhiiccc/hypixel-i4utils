import Config from "../config"
import RenderLib from "../../RenderLib/"
import Settings from "../config";

importPackage(Packages.com.chattriggers.ctjs.minecraft.libs);

let ready = true;
let cd = 30000

function drawGyroReady(x,y,z) {
    RenderLib.drawCyl(x + 0.5, y + 1, z + 0.5, 10, 10, 0.2, 50, 1, 0, 90, 90, Settings.color.getRed()/255, Settings.color.getGreen()/255, Settings.color.getBlue()/255, Settings.color.getAlpha()/255, false, false);
    RenderLib.drawCyl(x + 0.5, y + 1.5, z + 0.5, 0.5, 0.5, 2, 10, 1, 0, 90, 90, Settings.colorCenter.getRed()/255, Settings.colorCenter.getGreen()/255, Settings.colorCenter.getBlue()/255, Settings.colorCenter.getAlpha()/255, false, false);
}

function drawGyroNotReady(x,y,z) {
    RenderLib.drawCyl(x + 0.5, y + 1, z + 0.5, 10, 10, 0.2, 50, 1, 0, 90, 90, Settings.colorNotReady.getRed()/255, Settings.colorNotReady.getGreen()/255, Settings.colorNotReady.getBlue()/255, Settings.colorNotReady.getAlpha()/255, false, false);
    RenderLib.drawCyl(x + 0.5, y + 1.5, z + 0.5, 0.5, 0.5, 2, 10, 1, 0, 90, 90, Settings.colorCenter.getRed()/255, Settings.colorCenter.getGreen()/255, Settings.colorCenter.getBlue()/255, Settings.colorCenter.getAlpha()/255, false, false);
}

register("renderWorld", () => {
    if (!Config.GyroToggle || Player.getHeldItem()?.getName()?.removeFormatting() !== "Gyrokinetic Wand") return
    else {

        let cursor = Player.getPlayer().func_174822_a(25, 0.0);
        let block_position = cursor?.func_178782_a();
        if (!cursor || !block_position)
            return ;

        block_position = new BlockPos(block_position);
        let [x, y, z] = [block_position.getX(), block_position.getY(), block_position.getZ()];
        let blockAt = World.getBlockAt(x, y, z);

        if (!blockAt || !blockAt.type.getID())
            return ;

        if(ready == 1)
            drawGyroReady(x,y,z);
        else
            drawGyroNotReady(x,y,z);


    }
});


register("actionBar",() =>{ //todo fix sheep pet and mage in dungeon cd reduction
    ready = 0;
    cd = 30000
    isInDungeon();
    setTimeout(() => {
        ready = false;
    }, cd);
}).setCriteria("${*} (Gravity Storm) ${*}");

