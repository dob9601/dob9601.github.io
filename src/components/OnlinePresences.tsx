import "./OnlinePresences.css"

import GitHubLogo from "./social-icons/GitHub.png"
import LinkedInLogo from "./social-icons/LinkedIn.png"

export function OnlinePresences() {
    return (
        <>
            <h2>Find me Online</h2>
            <div className="OnlinePresences">
                <OnlinePresence image_url={GitHubLogo} alt_text="GitHub Account" link="https://github.com/dob9601/" />
                <OnlinePresence image_url={LinkedInLogo} alt_text="LinkedIn Account" link="https://www.linkedin.com/in/daniel-o-brien-a4b80512a/" />
            </div>
            <h2>Or Drop Me An Email</h2>
            <a className="Email" href="mailto:me@danielobr.ie?subject=About%20Me%20%7C%20Query">me@danielobr.ie</a>
        </>
    )
}

interface OnlinePresenceProps {
    image_url: string
    alt_text: string
    link: string
}

function OnlinePresence(props: OnlinePresenceProps) {
    return (
        <a className="OnlinePresence" href={props.link} target="_blank" rel="noreferrer">
            <div>
                <img src={props.image_url} alt={props.alt_text} />
            </div>
        </a>
    )
}
