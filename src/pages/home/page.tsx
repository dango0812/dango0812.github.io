import { useEffect, useState } from "react"
// components
import Card from "src/components/card"
// sections
import HomeHero from "src/sections/home/home-hero"
// hooks
import useTabs from 'src/hooks/useTabs'

interface ProfileItem {
    label: string;
    value: string;
}

export default function HomePage() {
    const { currentTab, onChangeTab } = useTabs('About Me')
    const [profile, setProfile] = useState<ProfileItem[]>([]);

    const HOME_TABS = [
        {
            value: 'About Me',
            component: (
                <div className="flex flex-wrap justify-center gap-4">
                    <Card className="w-full">
                        <h1 className="text-2xl font-bold tracking-tighter text-gray-700">
                            프로필
                        </h1>
                        {profile.map((item) => (
                            <div className="flex">
                                <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                                    {item.label}:
                                </p>
                                <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">
                                    &nbsp;{item.value}
                                </p>
                            </div>
                        ))}
                    </Card>
                </div>
            )
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

    const getProfile = () => {
        fetch("/api/v1/getProfile")
        .then((response) => response.json())
        .then((data) => setProfile(data))
    }
    
    useEffect(() => {
        getProfile();
    }, []);

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
