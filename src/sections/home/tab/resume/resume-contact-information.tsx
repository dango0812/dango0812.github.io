import { memo } from 'react'

// components
import Card from "src/components/card"

function ResumeContactInformation() {

    const CONTACT_CHANNEL_INFORMATION = [
        {
            icon: '✉️',
            value: 'ehdrbsla12000@gmail.com',
            link: 'mailto:ehdrbsla12000@gmail.com'
        },
        {
            icon: '🧑‍💻',
            value: 'Github',
            link: 'https://github.com/dango0812'
        },
        {
            icon: '📚',
            value: 'Study Log',
            link: 'https://github.com/dango0812/study-log'
        },
    ]

    return (
        <Card>
            <h1 className="text-xl font-bold tracking-tighter text-gray-700">
                Contact & Channels 🌏
            </h1>
            <div className='flex flex-col mt-3 gap-4'>
                {CONTACT_CHANNEL_INFORMATION.map((info) => (
                    <a className='max-w-max md:hover:scale-110 transition-transform ease-in-out duration-300' href={info.link} target='_blank' rel="noreferrer noopener">
                        <h3>
                            {info.icon} {info.value}
                        </h3>
                    </a>
                ))}
            </div>
        </Card>
    )
}

export default memo(ResumeContactInformation);