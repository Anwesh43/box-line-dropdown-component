import React from 'react'
import { useStyle } from './hooks'

const BoxSlideDropdown = ({scale, w, h, onClick}) => {
    const {blockStyle, dropBoxStyle, lineStyle} = useStyle(w, h, scale)
    return (
        <div onClick = {onClick}>
            <div style = {blockStyle()}>
            </div>
            <div style = {dropBoxStyle()}>
            </div>
            <div style = {lineStyle()}>
            </div>
        </div>
    )
}

export default BoxSlideDropdown 

