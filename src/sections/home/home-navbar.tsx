// paths
import { paths } from 'src/routes/paths'

export default function HomeNavbar() {
    return (
        <section className="border-b border-gray-200 text-sm font-medium text-center pt-10">
            <ul className="flex justify-center items-center -mb-px">
                <li className="me-2">
                    <a href={paths.aboutMe} className="inline-block px-4 py-2 mb-1 active text-orange-500 font-bold border-orange-400">About Me</a>
                </li>
                <li className="me-2">
                    <a href={paths.Experience} className="inline-block px-4 py-2 mb-1 hover:bg-gray-100 hover:text-zinc-800 text-zinc-600 rounded-lg">Experience</a>
                </li>
                <li className="me-2">
                    <a href={paths.projects} className="inline-block px-4 py-2 mb-1 hover:bg-gray-100 hover:text-zinc-950 text-zinc-600 rounded-lg">Projects</a>
                </li>
                <li className="me-2">
                    <a href={paths.links} className="inline-block px-4 py-2 mb-1 hover:bg-gray-100 hover:text-zinc-950 text-zinc-600 rounded-lg">Links</a>
                </li>
            </ul>
        </section>
    )
}