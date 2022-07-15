import React from 'react'
import styled from 'styled-components'
import leftArrow from '../images/left-arrow.png'

const BackButton = styled.img`
    widht: 28px;
    height: 28px;
`

function BackHeader() {
    return (
        <BackButton src={leftArrow}/>
    )
}

export default BackHeader