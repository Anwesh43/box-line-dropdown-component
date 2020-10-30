import React from 'react'
import { useAnimatedScale, useDimension } from './hooks'

const BoxSlideDropdownComponent = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.01, 20)
    return (
      <div>
        <BoxSlideDropdownComponent w = {w} h = {h} onClick = {start} scale = {scale}>
        </BoxSlideDropdownComponent>
      </div>
    )
}

export default BoxSlideDropdownComponent