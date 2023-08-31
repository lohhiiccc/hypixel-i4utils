import request from "requestv2";


register("command", () => {
  let profileId = "b855060f-097a-4e5a-a19d-1761f44d44d8";
  let name = Player.getName();
  request({
    url: `https://sky.shiiyu.moe/api/v2/profile/${name}`,
    headers: { 'User-Agent': 'Mozilla/5.0', 'Content-Type': 'application/json' },
    json: true
  }).then(data => {
    const mage = data.profiles[profileId].raw.dungeons.player_classes.mage.experience
    console.log("mage: " + mage)
  }
  )
  .catch(erreur => {
      console.log(erreur);
    });
}).setName("updateapi");

