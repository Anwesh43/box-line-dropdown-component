import { useState, useEffect } from 'react'
import { sinify, divideScale } from './utils'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [animated, setAnimated] = useState(false)
    const [scale, setScale] = useState(0)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }           
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h, 
    }
}


export const useStyle = (w, h, scale) => {
    const position = 'absolute'
    const size = w / 9
    const x = w / 2 -  size / 2 
    const y = h / 5 
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const background = 'green'
    return {
        blockStyle() {
            const left = `${x + size * sf1}px`
            const top = `${y}px`
            const width = `${size / 10}px`
            const height = `${size / 10}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height, 
                background
            }
        },
        dropBoxStyle() {
            const left = `${x}px`
            const top = `${y + size / 10}px`
            const width = `${size}px`
            const height = `${size * sf2}px`
            return {
                position, 
                left,
                top, 
                width, 
                height, 
                background
            }
        },
        lineStyle() {
            const left = `${x}px`
            const top = `${y + size / 10}px`
            const width = `${size * sf1}px`
            const height = `${size / 30}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height,
                background
            }
        }
    }
}