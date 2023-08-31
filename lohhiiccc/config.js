import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty , Color } from 'Vigilance';

@Vigilant("lohhiiccc")
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
        name: "ice spray timer",
        description: "comming soon",
        category: "Timer",
        subcategory: "ice spary",
        placeholder: "Activate",
    })
    icespray = false;
    @SwitchProperty({
        name: "fire freeze timer",
        description: "comming soon",
        category: "Timer",
        subcategory: "fire freeze",
        placeholder: "Activate",
    })
    FF = false;

    @SwitchProperty({
        name: "HYPE broken alert",
        description: "detect when hype is broke",
        category: "other",
        subcategory: "hyperion",
        placeholder: "Activate",
    })
    hypebr = true;
    @TextProperty({
        name: "alert message",
        description: "message when hype is broke",
        category: "other",
        subcategory: "hyperion",
        placeholder: "hype broke"
    })
    hypeMessage = "hype broke";
    @SwitchProperty({
        name: "golden fish alert",
        description: "alert when golden fish spawn",
        category: "other",
        subcategory: "trophy fishing",
        placeholder: "Activate"
    })
    goldenfish = true;

    @SwitchProperty({
        name: "trophy alert",
        description: "alert when a new trophy fish was found",
        category: "other",
        subcategory: "trophy fishing",
        placeholder: "Activate"
    })
    TrfAlert = true
/*    @ButtonProperty({
        name: "update data",
        description: "update manual all api data",
        category: "other",
        subcategory: "api",
        placeholder: "Activate"
    })
    myButtonAction() {
        console.log("wow i have a button?!?");

    }*/
    /*
        @SliderProperty({
            name: "Mage level",
            description: "mage cooldown reduction",
            category: "settings",
            min: 0,
            max: 50
        })
        MageLvl = 0;*/

    @TextProperty({
        name: "apiKey",
        description: "/api new",
        category: "other",
        subcategory: "api",
        placeholder: ""
    })
    ApiKey = "";



    constructor() {
        this.initialize(this);
        this.setCategoryDescription("Overlay", "")
        this.setSubcategoryDescription("Overlay", "Gyrokinetic Wand", "Gyrokinetic Wand Overlay")
    }
}



export default new Settings();

