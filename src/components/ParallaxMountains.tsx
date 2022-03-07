import {ParallaxBanner} from "react-scroll-parallax";

import "./ParallaxMountains.css"

import MountainImage0 from "./parallax-mountains-layers/0.png";
import MountainImage1 from "./parallax-mountains-layers/1.png";
import MountainImage2 from "./parallax-mountains-layers/2.png";
import MountainImage3 from "./parallax-mountains-layers/3.png";

export function ParallaxMountains() {
    return (
        <>
            <ParallaxBanner
                className="ParallaxMountains"
                layers={[
                    {children: <h1 className="Header">About Me | Daniel O'Brien</h1>, className: "HeaderBox", translateY: ["-60%", "60%"]},
                    {image: MountainImage0, className: "Mountain", expanded: false, translateY: ["-100%", "100%"]},
                    {image: MountainImage1, className: "Mountain", expanded: false, translateY: ["-80%", "80%"]},
                    {image: MountainImage2, className: "Mountain", expanded: false, translateY: ["-60%", "60%"]},
                    {image: MountainImage3, className: "Mountain", expanded: false},
                ]}
            />
        </>
    )
}
