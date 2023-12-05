export default function HomeHero() {
    return (
        <section className="max-w-screen-lg mx-auto p-32">
            <div className="w-full flex justify-center items-center flex-col gap-1">
                <img className="rounded-full w-32 h-32" src="/assets/profile.jpg" alt="profile"/>
                <h1 className="font-bold text-2xl">
                    Dango0812
                </h1>
                <h2 className="text-base whitespace-nowrap">Frontend Developer dango0812 portfolio🫠</h2>
            </div>
        </section>
    )
}