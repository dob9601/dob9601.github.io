import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";

import "./ParallaxMountains.css"

import MountainImage0 from "./ParallaxMountainsImages/0.png";
import MountainImage1 from "./ParallaxMountainsImages/1.png";
import MountainImage2 from "./ParallaxMountainsImages/2.png";
import MountainImage3 from "./ParallaxMountainsImages/3.png";

export function ParallaxMountains() {
    const style: React.CSSProperties = {
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {image: MountainImage0, speed: -90, className: "Mountain", style: style},
                    {image: MountainImage1, speed: -60, className: "Mountain", style: style},
                    {image: MountainImage2, speed: -30, className: "Mountain", style: style},
                    {image: MountainImage3, speed: 0, className: "Mountain", style: style},
                ]}
                style={{height: "100vh"}}
            />
        </ParallaxProvider>
    )
}
