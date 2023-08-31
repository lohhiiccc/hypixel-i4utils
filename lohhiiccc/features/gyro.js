import RenderLib from "../../RenderLib/"
import Config from "../config"
import Settings from "../config";


importPackage(Packages.com.chattriggers.ctjs.minecraft.libs);


let ready = 1;
let cd = 30000

function drawGyroReady(x,y,z) {
    RenderLib.drawCyl(x + 0.5, y + 1, z + 0.5, 10, 10, 0.2, 30, 1, 0, 90, 90, Settings.color.getRed()/255, Settings.color.getGreen()/255, Settings.color.getBlue()/255, Settings.color.getAlpha()/255, false, false)

    RenderLib.drawCyl(x + 0.5, y + 1.5, z + 0.5, 0.5, 0.5, 2, 10, 1, 0, 90, 90, Settings.colorCenter.getRed()/255, Settings.colorCenter.getGreen()/255, Settings.colorCenter.getBlue()/255, Settings.colorCenter.getAlpha()/255, false, false)
}

function drawGyroNotReady(x,y,z) {
    RenderLib.drawCyl(x + 0.5, y + 1, z + 0.5, 10, 10, 0.2, 30, 1, 0, 90, 90, Settings.colorNotReady.getRed()/255, Settings.colorNotReady.getGreen()/255, Settings.colorNotReady.getBlue()/255, Settings.colorNotReady.getAlpha()/255, false, false)

    RenderLib.drawCyl(x + 0.5, y + 1.5, z + 0.5, 0.5, 0.5, 2, 10, 1, 0, 90, 90, Settings.colorCenter.getRed()/255, Settings.colorCenter.getGreen()/255, Settings.colorCenter.getBlue()/255, Settings.colorCenter.getAlpha()/255, false, false)
}

register("renderWorld", () => {
    if (!Config.GyroToggle || Player.getHeldItem()?.getName()?.removeFormatting() !== "Gyrokinetic Wand") return
    else {

        let la = Player.getPlayer().func_174822_a(25, 0.0)
        let bp = la?.func_178782_a()
        if (!la || !bp) return
        bp = new BlockPos(bp)
        let [x, y, z] = [bp.getX(), bp.getY(), bp.getZ()]
        let blockAt = World.getBlockAt(x, y, z)
        if (!blockAt || !blockAt.type.getID()) return

        if(ready == 1)
            drawGyroReady(x,y,z);
        else
            drawGyroNotReady(x,y,z);


    }
});


// listen for mouse clicks

let area = 0;
function isInDungeon() {

    Scoreboard.getLines().forEach(line => {
        let name = ChatLib.removeFormatting(line.getName()).replace(/[^A-z0-9 \:\(\)\.]/g, "")
        if (name.includes("The Catacombs (")){
            area = 1;
        }
        else{
            area = 0;
        }
    })



    }

register("actionBar",() =>{
    ready = 0;
    cd =30000
    isInDungeon();
    //ChatLib.chat(area);
    
    setTimeout(() => {
        ready = 1;
    }, cd);


}).setCriteria("${*} (Gravity Storm) ${*}");

