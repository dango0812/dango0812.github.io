// sections
import HomeHero from "src/sections/home/home-hero"
// hooks
import useTabs from 'src/hooks/useTabs'
import { ResumeView } from "src/sections/home/tab/resume/view";

export default function HomePage() {
    const { currentTab } = useTabs('Resume')

    const HOME_TABS = [
        {
            value: 'Resume',
            component: <ResumeView />
        },
        {
            value: 'Experience',
            component: <>tab1</>
        },
        {
            value: 'Projects',
            component: <>tab2</>
        },
        {
            value: 'Links',
            component: <>tab2</>
        },
    ];

    return (
        <main className="bg-white">
            <HomeHero />
            <section className="border-b border-gray-200 text-sm font-medium text-center pt-8">
                <ul className="-mb-px flex justify-center items-center">
                    {HOME_TABS.map((tab) => (
                        <li key={tab.value} className="me-2 cursor-pointer">
                            <h3 className={`inline-block px-4 py-2 mb-1 rounded-lg
                                    ${tab.value === currentTab ? 'text-orange-500' : 'text-zinc-500'}
                                    ${tab.value === currentTab && 'font-bold'}
                                    ${tab.value !== currentTab && 'hover:bg-gray-100'}
                                    ${tab.value !== currentTab && 'hover:text-zinc-800'}
                                `}
                            >
                                {tab.value}
                            </h3>
                        </li>
                    ))}
                </ul>
            </section>

            {HOME_TABS.map((tab) => {
                const isMatched = tab.value === currentTab;
                return isMatched && <section key={tab.value} className="max-w-screen-lg mx-auto py-6">{tab.component}</section>
            })}
        </main>
    );
}
