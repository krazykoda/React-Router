import React, { useRef, useEffect } from 'react'
import BgColor from './BgColor';

export default function Contacts() {
    const box = useRef()
    
    useEffect(()=> {
        let r = Math.floor(Math.random() * 6)
        box.current.parentNode.style.backgroundColor = BgColor(3)
    }, [])

    return (
        <div ref={box}>
            <h1>Contacts</h1>
        </div>
    )
}
