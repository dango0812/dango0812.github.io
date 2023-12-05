// sections
import HomeHero from "src/sections/home/home-hero"
import HomeNavbar from "src/sections/home/home-navbar"

export default function HomePage() {
    return (
        <main className="bg-white overflow-hidden">
            <HomeHero />
            <HomeNavbar />
        </main>
    );
}
