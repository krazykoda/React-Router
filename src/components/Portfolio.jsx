import React, { useRef, useEffect } from 'react';
import BgColor from './BgColor';

export default  function Portfolio() {
    const box = useRef()
    
    useEffect(()=> {
        let r = Math.floor(Math.random() * 6)
        box.current.parentNode.style.backgroundColor = BgColor(5)
    }, [])


    return (
        <div ref={box} >
            <h1>Portfolio</h1>
        </div>
    )
}
