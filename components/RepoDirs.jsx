import Link from "next/link"

const fetchRepoDirs = async (name) => {
    const request = await fetch(`https://api.github.com/repos/shohjaxonAbdurahimov/${name}/contents`)
    const repos = await request.json()
    return repos

}
async function RepoDirs({ name }) {
    const urls = await fetchRepoDirs(name)
    const dirs = urls.filter((url) => url.type === 'dir')
    return (
        <div>
            <ul>
                {dirs.map((dir) => {
                    return (
                        <li key={dir.path}>
                            <Link href={dir.url}>{dir.path}</Link>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default RepoDirs