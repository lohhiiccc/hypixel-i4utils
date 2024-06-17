import "./features/gyro"
import "./features/i4/i4";

import Settings from "./config";

register("command", () => Settings.openGUI()).setName("i4");
