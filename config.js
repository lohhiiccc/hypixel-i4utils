import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("i4")
class Settings {

    @SwitchProperty({
        name: "Gyrokinetic Wand Overlay",
        description: "Toggles gyro overlay on/off.",
        category: "Overlay",
        subcategory: "Gyrokinetic Wand",
        placeholder: "Activate",
    })
    GyroToggle = true;

    @ColorProperty({
        name: "ready color",
        description: "Pick a color!",
        category: "Overlay",
        subcategory: "Gyrokinetic Wand"
    })
    color = Color.GREEN;

    @ColorProperty({
        name: "not ready color",
        description: "Pick a color!",
        category: "Overlay",
        subcategory: "Gyrokinetic Wand"
    })
    colorNotReady = Color.RED;
    @ColorProperty({
        name: "center color",
        description: "Pick a color!",
        category: "Overlay",
        subcategory: "Gyrokinetic Wand"
    })
    colorCenter = Color.BLUE;
    @SwitchProperty({
        name: "Arrow device helper",
        description: "highlight target on device and mark old targets",
        category: "Dungeon",
        subcategory: "Arrow device",
        placeholder: "Activate"
    })
    deviceTooglemain = true;
    @ColorProperty({
        name: "target",
        description: "target color",
        category: "Dungeon",
        subcategory: "Arrow device",
    })
    tagetColor = Color.GREEN;
    @ColorProperty({
        name: "old target",
        description: "old target color",
        category: "Dungeon",
        subcategory: "Arrow device",
    })
    oldTagetColor = Color.RED;
    @ColorProperty({
        name: "other block",
        description: "other block color",
        category: "Dungeon",
        subcategory: "Arrow device",
    })
    otherTarget = Color.WHITE;

    @SwitchProperty({
        name: "device message toogle",
        description: "seend msg to party whene device are done",
        category: "Dungeon",
        subcategory: "Devices",
        placeholder: "Activate"
    })
    devicemsgToogle = true;
    @TextProperty({
        name: "device done message",
        description: "send message to party whene device are done",
        category: "Dungeon",
        subcategory: "Devices",
        placeholder: "Devices"
    })
    devdonedevice = "device done !";
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Dungeon", "")
        this.setSubcategoryDescription("Dungeon", "Devices", "config devices helper")
        this.setCategoryDescription("Dungeon", "")
        this.setSubcategoryDescription("Dungeon", "Arrows Device helper", "config arrow device helper color")
        this.setCategoryDescription("Overlay", "")
        this.setSubcategoryDescription("Overlay", "Gyrokinetic Wand", "Gyrokinetic Wand Overlay")
    }
}

export default new Settings();

