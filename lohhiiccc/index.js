import "./features/gyro"
import "./features/hypeBrock"
import "./features/fishing/goldenfish"
import "./features/getcata"

import Settings from "./config";
import ApiKey from "./config";
import { Color } from "Vigilance";



register("command", () => Settings.openGUI()).setName("lohhiiccc");

//Your new API key is d7eb10a8-ef57-4739-a094-003ce7084bd9

register("chat", (api) => {
  console.log("api key: " + api);
  Settings.ApiKey = api

}).setChatCriteria("Your new API key is ${API}");

