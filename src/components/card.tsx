import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Card({ children }: Props) {
    return (
        <div className='block py-4 px-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
            {children}
        </div>
    )
}