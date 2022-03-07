import "./Projects.css"

import Purnell from "./project-images/Purnell.png"
import Ordle from "./project-images/Ordle.png"
import GitHub from "./project-images/GitHub.png"
import Philmnight from "./project-images/Philmnight.png"

export function Projects() {
    return (
        <>
            <h2>Notable Projects</h2>
            <div className="Projects">
                <Project
                    name="Purnell"
                    link="https://purnell.xyz"
                    image_url={Purnell}
                    description="A Discord LFG (Looking for Game bot) active in over 250 servers" />
                <Project
                    name="Ordle"
                    link="https://ordle.xyz"
                    image_url={Ordle}
                    description="An over-the-top, procedurally generated wordle spin-off with support for words of up to 18 letters long" />
                <Project
                    name="Jointhedots"
                    link="https://github.com/dob9601/jointhedots"
                    description="An open-source git-based dotfile manager written in Rust!" />
                <Project
                    name="Philmnight"
                    link="https://github.com/hacksoc/philmnight"
                    description="Filmnight management system built for the HackSoc, the York computer science society"
                    image_url={Philmnight} />
            </div>
        </>
    )
}

interface ProjectProps {
    name: string
    description: string
    link: string
    image_url?: string
}

function Project(props: ProjectProps) {
    const image_url = props.image_url !== undefined ? props.image_url : GitHub
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="Project" >
            <div className="ProjectInner">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <img src={image_url} alt={`Screenshot of the ${props.name} project`} />
        </a>
    )
}
