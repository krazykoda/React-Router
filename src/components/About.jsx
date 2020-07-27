import React, { useRef, useEffect } from 'react'
import BgColor from './BgColor';

export default function About() {
    const box = useRef()
    
    useEffect(()=> {
        let r = Math.floor(Math.random() * 6)
        box.current.parentNode.style.backgroundColor = BgColor(2)
    }, [])

    return (
        <div ref={box}>
           <h1>About</h1> 
        </div>
    )
}
