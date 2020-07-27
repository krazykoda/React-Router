import React, { useRef, useEffect } from 'react';
import BgColor from './BgColor';

export default function Service() {
    const box = useRef()
    
    useEffect(()=> {
        let r = Math.floor(Math.random() * 6)
        box.current.parentNode.style.backgroundColor = BgColor(4)
    }, [])

    return (
        <div ref={box}>
            <h1>Service</h1>
        </div>
    )
}

