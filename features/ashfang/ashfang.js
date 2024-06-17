import Settings from "../../config";
import Ashfang from "./ashfangclass";


const AshfangBoss = new Ashfang();

register("step", () => {
    if(!Settings.AshfangToogle || !AshfangBoss.inAera() || !World.isLoaded()) return;

    AshfangBoss.black = World.getAllEntities().filter(entity => entity.getName().includes("Ashfang Follower"));
    AshfangBoss.red = World.getAllEntities().filter(entity => entity.getName().includes("Ashfang Underling"));
    AshfangBoss.bullet = World.getAllEntities().filter(entity => entity.getName().includes("Blazing Soul"));
    AshfangBoss.blue = World.getAllEntities().filter(entity => entity.getName().includes("Ashfang Acolyte"));
}).setFps(1);

register("renderWorld", () => {
    if(!Settings.AshfangToogle || !AshfangBoss.inAera() || !World.isLoaded()) return;
   AshfangBoss.render();
});
