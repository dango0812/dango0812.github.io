import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string
}

export default function Card({ children, className }: Props) {
    return (
        <div className={`block py-4 px-6 bg-white border border-gray-200 rounded-lg shadow ${className}`}>
            {children}
        </div>
    )
}