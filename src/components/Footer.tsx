const REPO_LINK = "https://github.com/dob9601/dob9601.github.io"

export function Footer() {
    return (
        <>
            <hr />
            <p><i>
                &copy; 2022 MIT License. The source for this About Me page can be
                found <a href={REPO_LINK} target="_blank" rel="noreferrer">on my GitHub account</a>
            </i></p>
        </>
    )
}
