// sections
import HomeHero from "src/sections/home/home-hero"
// hooks
import useTabs from 'src/hooks/useTabs'

export default function HomePage() {
    const { currentTab, onChangeTab } = useTabs('About Me')

    const HOME_TABS = [
        {
            value: 'About Me',
            component: <>tab0</>
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
        <main className="bg-white overflow-hidden">
            <HomeHero />
            <section className="border-b border-gray-200 text-sm font-medium text-center pt-10">
                <ul className="-mb-px flex justify-center items-center">
                    {HOME_TABS.map((tab) => (
                        <li key={tab.value} className="me-2 cursor-pointer">
                            <h3 className={`inline-block px-4 py-2 mb-1 rounded-lg
                                    text-${tab.value === currentTab ? 'orange-500' : 'zinc-600'}
                                    font-${tab.value === currentTab && 'bold'} 
                                    hover:bg-${tab.value !== currentTab && 'gray-100'} 
                                    hover:text-${tab.value !== currentTab && 'zinc-800'}
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
                return isMatched && <section>{tab.component}</section>
            })}
        </main>
    );
}
