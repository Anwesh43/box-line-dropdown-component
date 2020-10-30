import React from 'react'
import { useAnimatedScale, useDimension } from './hooks'
import BoxSlideDropdown from './BoxSlideDropdown'
const BoxSlideDropdownComponent = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.01, 20)
    return (
      <div>
        <BoxSlideDropdown w = {w} h = {h} onClick = {start} scale = {scale}>
        </BoxSlideDropdown>
      </div>
    )
}

export default BoxSlideDropdownComponent