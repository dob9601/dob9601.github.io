import { ParallaxBanner } from "react-scroll-parallax";

import "./ParallaxMountains.css"

import MountainImage0 from "./parallax-mountains-layers/0.png";
import MountainImage1 from "./parallax-mountains-layers/1.png";
import MountainImage2 from "./parallax-mountains-layers/2.png";
import MountainImage3 from "./parallax-mountains-layers/3.png";

export function ParallaxMountains() {
    return (
        <div className="ParallaxMountainsOuter">
            <ParallaxBanner
                className="ParallaxMountains"
                layers={[
                    { children: <h1 className="Header">About Me | Daniel O'Brien</h1>, className: "HeaderBox", translateY: ["-80%", "70%"] },
                    { image: MountainImage0, className: "Mountain", expanded: false, translateY: ["0%", "150%"], shouldAlwaysCompleteAnimation: true },
                    { image: MountainImage1, className: "Mountain", expanded: false, translateY: ["0%", "100%"], shouldAlwaysCompleteAnimation: true },
                    { image: MountainImage2, className: "Mountain", expanded: false, translateY: ["0%", "50%"], shouldAlwaysCompleteAnimation: true },
                    { image: MountainImage3, className: "Mountain ForegroundMountain", expanded: false },
                ]}
            />
        </div>
    )
}
