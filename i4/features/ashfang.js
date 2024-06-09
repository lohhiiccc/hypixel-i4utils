import RenderLib from "../../RenderLib/"
import Config from "../config"
import Settings from "../config";
import renderBeaconBeam from "../../BeaconBeam"


register("step", () => {
  if(!World.isLoaded()) return
  bouleentities = World.getAllEntities().filter(e => e.getName().includes("Blazing Soul"))
  blueentities = World.getAllEntities().filter(e => e.getName().includes("Ashfang Acolyte"))
  redentities = World.getAllEntities().filter(e => e.getName().includes("Ashfang Underling"))

  blackentities = World.getAllEntities().filter(e => e.getName().includes("Ashfang Follower"))
}).setFps(1)

register("renderWorld", () => {
  Scoreboard.getLines().forEach(line => {
    //console.log(line)
    if (ChatLib.removeFormatting(line).includes("Ashfang") && Settings.ashfangTooglemain == true)
    {
      
      /*red*/
      if (Settings.ashfangTooglered == true){ 
      redentities.forEach(e => {

        const x = e.getX()
        const y = e.getY()
        const z = e.getZ()
  
        renderBeaconBeam(x, y, z, 1, 0, 0, 1, true)
      })
    }
      /*blue */
      if (Settings.ashfangToogleblue){
      blueentities.forEach(e => {

        const x = e.getX()
        const y = e.getY()
        const z = e.getZ()
  
        renderBeaconBeam(x, y, z, 0, 0, 1, 1, true)
      })}
      /*black */
      if(Settings.ashfangToogleblack){
      blackentities.forEach(e => {

        const x = e.getX()
        const y = e.getY()
        const z = e.getZ()
  
        renderBeaconBeam(x, y, z, 1, 1, 1, 1, true)
      })}
      /*bouboule */
      if(Settings.ashfangToogleboule){
      bouleentities.forEach(e => {

        const x = e.getX()
        const y = e.getY()
        const z = e.getZ()
  
        renderBeaconBeam(x, y, z, 0, 1, 0, 1, true)
      })}

      /*main */
      renderBeaconBeam(-485, 136, -1016, 1, 1, 1, 1, true)
      
    }
  })
});
