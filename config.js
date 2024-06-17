import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("mousk")
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


    @SwitchProperty({
        name: "Ashfang overlay",
        description: "Ashfang overlay toogle!",
        category: "Nether",
        subcategory: "Ashfang",
        placeholder: "Activate"
    })
    AshfangToogle = true;


    @SwitchProperty({
        name: "Ashfang hitbox",
        description: "Ashfang main hitbox toogle!",
        category: "Nether",
        subcategory: "Ashfang",
        placeholder: "Activate"
    })
    AshfangHitboxToogle = true;

    @SwitchProperty({
        name: "Ashfang red waypoint",
        description: "show Ashfang Underling! wp",
        category: "Nether",
        subcategory: "Ashfang waypoint toogle",
        placeholder: "Activate"
    })
    AshfangRedToogle = true;

    @SwitchProperty({
        name: "Ashfang blue waypoint",
        description: "show Ashfang Acolyte! wp",
        category: "Nether",
        subcategory: "Ashfang waypoint toogle",
        placeholder: "Activate"
    })
    AshfangBlueToogle = true;


    @SwitchProperty({
        name: "Ashfang black waypoint",
        description: "show Ashfang Follower! wp",
        category: "Nether",
        subcategory: "Ashfang waypoint toogle",
        placeholder: "Activate"
    })
    AshfangBlackToogle = true;


    @SwitchProperty({
        name: "Ashfang bullet waypoint",
        description: "show Blazing Souls! wp",
        category: "Nether",
        subcategory: "Ashfang waypoint toogle",
        placeholder: "Activate"
    })
    AshfangBulletToogle = true;

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Nether", "")
        this.setSubcategoryDescription("Nether", "Ashfang", "config Ashfang overlay")
        this.setCategoryDescription("Dungeon", "")
        this.setSubcategoryDescription("Dungeon", "Devices", "config devices helper")
        this.setCategoryDescription("Dungeon", "")
        this.setSubcategoryDescription("Dungeon", "Arrows Device helper", "config arrow device helper color")
        this.setCategoryDescription("Overlay", "")
        this.setSubcategoryDescription("Overlay", "Gyrokinetic Wand", "Gyrokinetic Wand Overlay")
    }
}

export default new Settings();

