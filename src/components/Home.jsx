import React, { useRef, useEffect } from 'react'
import BgColor from './BgColor';

export default function Home() {
    const box = useRef()
    
    useEffect(()=> {
        let r = Math.floor(Math.random() * 6)
        box.current.parentNode.style.backgroundColor = BgColor(1)
    }, [])

    return (
        <div ref={box}>
            <h1>Home</h1>
        </div>
    )
}
