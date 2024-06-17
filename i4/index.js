import "./features/gyro"
import "./features/i4/i4";



import Settings from "./config";
import { Color } from "Vigilance";

register("command", () => Settings.openGUI()).setName("i4");
