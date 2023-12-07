// react
import { useEffect, useState } from "react"
// components
import Card from "src/components/card"

interface Profile {
    label: string,
    value: string
}

export default function AboutMeTabView() {
    
    const [profile, setProfile] = useState<Profile[]>([]);
    const [loading, setLoading] = useState(false);

    const getProfile = () => {
        
        setLoading(true);

        fetch("https://my-json-server.typicode.com/dango0812/portfolio-db/getProfile")
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setProfile(data);
        })
        .catch((error) => {
            console.log('AboutMeTabView error', error);
            setLoading(false);
        })
    }

    useEffect(() => {
        getProfile();
    }, []);
    
    return (
        <div className="grid grid-cols-2 gap-4 mx-6">
            <Card className="col-span-2">
                <h1 className="text-xl font-bold tracking-tighter text-gray-700">
                    김동규 
                        <a className="hover:text-orange-500" href="https://github.com/dango0812" target="_blank" rel="noopener noreferrer">
                            &nbsp;(@dango0812)
                        </a>
                </h1>
                <p className="mt-2 font-normal text-gray-700 leading-7">
                    👨‍👩‍👧‍👦 팀에 소속되어 함께 일하며 서로의 아이디어와 관점을 공유하며 성장하는 것을 좋아합니다.
                </p>
                <p className="mt-2 font-normal text-gray-700 leading-7">
                    🏋️‍♂️ 가독성 높은 코드를 작성하기 위해 노력하고 있습니다.
                </p>
                <p className="mt-2 font-normal text-gray-700 leading-7">
                    🎖️ 기술적인 측면 뿐만 아니라 사용자 시각에서의 UI/UX를 개선하는데 관심이 많습니다.
                </p>
            </Card>

            <Card className="max-md:col-span-2">
                <h1 className="text-2xl font-bold tracking-tighter text-gray-700">
                    프로필
                </h1>
                {loading ? (
                    [...Array(5)].map((_, index) => (
                        <div key={index} className="h-3.5 bg-gray-200 rounded-full w-full mt-4" />
                    ))
                ) : (
                    <>
                        {profile.map((item) => (
                            <div key={item.label} className="flex">
                                <p className="mt-2 font-normal text-gray-700 leading-7">
                                    {item.label}:
                                </p>
                                <p className="mt-2 font-normal text-gray-700 leading-7">
                                    &nbsp;{item.value}
                                </p>
                            </div>
                        ))}
                    </>
                )}
            </Card>

            <Card>
                <h1 className="text-2xl font-bold tracking-tighter text-gray-700">
                    자격증
                </h1>
                <p className="mt-2 font-normal text-gray-700">
                    abc
                </p>
                <p className="mt-2 font-normal text-gray-700">
                    abc
                </p>
            </Card>
        </div>
    )
}