import React from 'react'

export default function BgColor(n) {
  const colors = [
     '#32a852', '#3246a8', '#8fa832', '#a84432', '#7b32a8', '#a83256'
  ]

  function shuffle(arr) {
    let np, temp;
  
    for(let i = arr.length-1; i > 0; i--) {
      np = Math.floor(Math.random() * (i+1) )
      temp = arr[i]
      arr[i] = arr[np]
      arr[np]= temp
    }
    return arr
  }

  const nColors = shuffle(colors);
  
  return nColors[n]
}
