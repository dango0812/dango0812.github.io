import { memo, useState } from 'react'

// components
import Card from "src/components/card"

function ResumeAwards() {

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
            <Card className='mb-4 lg:mb-0'>
                <h1 className="text-xl font-bold tracking-tighter text-gray-700">
                    Awards 🏆
                </h1>
                <div className='md:flex mt-3 gap-4'>
                        {AWARDS.map((award) => (
                            <Card key={award.title} className='max-w-xl shadow cursor-pointer hover:bg-gray-100'>
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
        </>
    )
}

export default memo(ResumeAwards)