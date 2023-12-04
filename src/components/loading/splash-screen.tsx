// react
import React from 'react'

type Props = {
    children?: React.ReactNode
}

export default function SplashScreen({ children, ...other }: Props) {
    return (
        <>
            Loading...
        </>
    )
}