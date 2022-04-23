import React from 'react'
import useScrollProgress from '../Hooks/useScrollProgress'
const ScrollProgressBar = () => {
    const { scrollPercent } = useScrollProgress()
  return (
    <div className='scroll-progress-bar-container'>
        <div className='scroll-progress-bar' style={{transform: `translateX(${scrollPercent - 103}%)`}}></div>
    </div>
  )
}

export default ScrollProgressBar