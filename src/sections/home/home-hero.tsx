// react
import { memo } from 'react'

function HomeHero() {
    return (
        <section className="max-w-screen-lg mx-auto pt-32">
            <div className="w-full flex justify-center items-center flex-col gap-1">
                <img className="rounded-full w-32 h-32" src="/assets/profile.jpg" alt="profile"/>
                <h1 className="font-bold text-2xl">
                    Dango0812
                </h1>
                <h2 className="text-base whitespace-nowrap">Frontend Developer 🫠</h2>
            </div>
        </section>
    )
}

export default memo(HomeHero);