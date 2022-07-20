import React from 'react'
import styled from 'styled-components'
import IconPlus from "../images/icon-plus.png"

const Box = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    border: 1px solid #D9D9D9;
    border-radius: 15px;

    & > img {
        width: 22px;
        height: 22px;
    }

    & > label {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    & > input {
        display: none;
    }
`

function RidingPictureAddButton({ onFileChange }) {

    return (
        <Box>
            <img src={IconPlus} alt="plus-icon" />
            <label htmlFor='riding-picture' />
            <input 
                id="riding-picture" 
                type="file" 
                accept="image/jpg, image/png, image/jpeg" 
                onChange={onFileChange}/>
        </Box>
    )
}

export default RidingPictureAddButton