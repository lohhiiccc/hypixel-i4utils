import "./features/gyro"
import "./features/i4/i4";
import "./features/ashfang/ashfang"

import Settings from "./config";

register("command", () => Settings.openGUI()).setName("mousk");
