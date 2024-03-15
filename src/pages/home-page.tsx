// sections
// const rootStyle = 'bg-gradient-to-r from-blue-100 to-blue-100 dark:bg-none dark:bg-[#16c24] min-h-screen p-6';
import HomeHero from "src/sections/home/home-hero";

export default function HomePage() {

    return (
        <main className='max-w-screen-lg mx-auto max-w-md:px-3 px-6'>
            <article className='flex flex-col justify-center gap-14 md:gap-16 py-6'>
                <HomeHero />
                {/*
                <HomeHero />
                <HomeIntroduce />
                <HomeTechStack />
                <HomeAwards />
                <HomeProjects />
                <HomeBlogPosts />
                */}
            </article>
        </main>
    );
}
