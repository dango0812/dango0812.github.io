import { memo } from 'react'

// components
import Card from "src/components/card"

function HomeAwards() {

    const AWARDS = [
        {
            title: '경찰청장 표창장',
            description: '의무경찰로 복무 중 행정 업무 진행 및 투철한 사명감으로 맡은 바 직무를 성실히 임하여 제74주년 경찰의 날을 맞이하여 표창받았습니다.',
            date: '2019.10.21',
            image: "/assets/award_1.jpg"
        },
        {
            title: 'SSC 창의성 영상 1위',
            description: '의무경찰로 복무 중 행정 업무 진행 및 투철한 사명감으로 맡은 바 직무를 성실히 임하여 제74주년 경찰의 날을 맞이하여 표창받았습니다.',
            date: '2019.10.21',
            image: "/assets/award_1.jpg"
        }
    ]

    return (
        <>
            <Card>
                <h1 className="text-xl font-bold tracking-tighter text-gray-700">
                    Awards 🏆
                </h1>
                <div className='md:flex mt-3 gap-4 max-w-md'>
                        {AWARDS.map((award) => (
                            <Card key={award.title} className='shadow cursor-pointer hover:bg-gray-100'>
                                <div className="flex flex-col items-center gap-4">
                                    <img className="w-2/4" src={award.image} alt="award" />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-700">{award.title}</h3>
                                        <p className="text-base font-medium text-gray-500">
                                            {award.date}
                                        </p>
                                    </div>
                                 </div>                    
                            </Card>
                        ))}
                </div>
            </Card>
            {/*
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full px-4" style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
                <div className='bg-white border border-gray-200 rounded-lg shadow-lg max-w-[640px] px-4 py-4' style={{ minWidth: 320 }}>
                    
                    <div className="flex items-center justify-between">
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="px-4 py-4 flex flex-row gap-8">
                        <img className="w-[380px] h-[380px] rounded-lg" src="/assets/award_1.jpg" alt="award" />
                        <div className='flex flex-col gap-4'>
                            <h3 className="text-lg font-bold text-gray-900">
                                경찰청장 표창장
                            </h3>
                            <h4 className="text-base text-gray-500">
                                의무경찰로 복무 중 행정 업무 진행 및 투철한 사명감으로 맡은 바 직무를 성실히 임하여 제74주년 경찰의 날을 맞이하여 표창받았습니다.
                            </h4>
                            <h5 className='text-gray-600 mt-auto'>
                                2019. 01. 02
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </>
    )
}

export default memo(HomeAwards)