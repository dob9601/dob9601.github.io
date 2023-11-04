import "./Introduction.css"

export function Introduction() {
    return (
        <div className="Introduction">
            <h2 className="tagline"><i>Software Developer / Discord Bot Enthusiast</i></h2>
            <p>Hey there! I'm currently a Game Server Developer working for <a href="https://www.frontier.co.uk/" target="_blank">Frontier Developments</a>.</p>
            <p>When I'm not sat around trying to figure out how to write an about me page, I enjoy (writing code), climbing, gaming and hiking.</p>
            <h2>Career So Far</h2>
            <div className="careerContainer">
                <div className="career">
                    <ul>
                        <li>Graduated from <a target="_blank" href="https://www.york.ac.uk/">The University of York</a> with first class honours</li>
                        <li>Associate Software Engineer, <a target="_blank" href="https://www.genomicsplc.com/">Genomics PLC</a></li>
                        <li>Full Game Server Developer, <a target="_blank" href="https://www.frontier.co.uk/">Frontier Developments</a> (current)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
