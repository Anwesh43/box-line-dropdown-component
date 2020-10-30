import React from 'react'
import { useStyle } from './hooks'

const BoxSlideDropdownm = ({scale, w, h, onClick}) => {
    const {blockStyle, dropBoxStyle} = useStyle(w, h, scale)
    return (
        <div onClick = {onClick}>
            <div style = {blockStyle()}>
            </div>
            <div style = {dropBoxStyle()}>
            </div>
        </div>
    )
}

export default BoxSlideDropdown 

