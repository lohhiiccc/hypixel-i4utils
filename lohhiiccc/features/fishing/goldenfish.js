import Config from "../../config"
import Settings from "../../config";
let trophy;




register("chat", (event) => {
  if(Settings.goldenfish == true){
    Client.showTitle("&2[&f§k0&2] &l&6GOLDEN FISH&e&r&2 [&f§k0&2]","&cwarning",5,30,5)  
  }
}).setChatCriteria("You spot a Golden Fish surface from beneath the lava!");
//&r&9You spot a &r&6Golden Fish &r&9surface from beneath the lava!&r





register("chat", (event) => {
  if(Settings.goldenfish == true){

    console.log(event)
    let splitKey = event.split(" ");
    const trophy = splitKey[splitKey.length - 1];
    const fishName = event.replace(`${trophy}`, "").trim();
    
    if(fishName === "Golden Fish"){
      let color 
      if(trophy === "BRONZE")
      color = "&f"
      if(trophy === "SILVER")
      color = "&7"
      if(trophy === "GOLD")
      color = "&6"
      if(trophy === "DIAMOND")
      color = "&3"
      
      Client.showTitle("&l&6GOLDEN FISH",color + trophy,5,30,5)
    }
  }
  
}).setChatCriteria("TROPHY FISH! You caught a ${EVENT}.");
