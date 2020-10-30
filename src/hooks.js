import {useState, useEffect} from 'react'


export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [animated, setAnimated] = useState(false)
    const [interval, setInterval] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (scale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }           
        }
    }
}