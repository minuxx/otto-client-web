import React from 'react'
import styled from 'styled-components'
import PictureAttach from '../images/picture-attach.png'

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 700;
    color: #FFFFFF;

    height: 50px;
    background-color: #CACED3;
    border-radius: 10px;

    & > img {
        width: 22px;
        height: 22px;
        margin-right: 5px;
    }

    & > label {
        display: flex;
        height: 100%;
        align-items: center;
    }

    & > input {
        display: none;
    }
`

function RidingPictureButton() {

    return (
        <Button>
            <img src={PictureAttach} alt="pictureAttach"/>
            <label htmlFor="riding-picture">배달앱 캡쳐사진 첨부하기</label>

            <input id="riding-picture" type="file" accept="image/jpg, image/png, image/jpeg" />
        </Button>
    )
}

export default RidingPictureButton