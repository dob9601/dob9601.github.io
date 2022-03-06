import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";

import "./ParallaxMountains.css"

import MountainImage0 from "./ParallaxMountainsImages/0.png";
import MountainImage1 from "./ParallaxMountainsImages/1.png";
import MountainImage2 from "./ParallaxMountainsImages/2.png";
import MountainImage3 from "./ParallaxMountainsImages/3.png";

export function ParallaxMountains() {
    return (
        <>
            <ParallaxBanner
                className="MountainParallax"
                layers={[
                    {children: <h1 className="Header">Title</h1>, speed: -300, className: "HeaderBox"},
                    {image: MountainImage0, speed: -225, className: "Mountain", expanded: false},
                    {image: MountainImage1, speed: -150, className: "Mountain", expanded: false},
                    {image: MountainImage2, speed: -75, className: "Mountain", expanded: false},
                    {image: MountainImage3, speed: 0, className: "Mountain", expanded: false},
                ]}
            />
        </>
    )
}
