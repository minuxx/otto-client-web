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
`

function RidingPictureButton() {

    return (
        <Button>
            <img src={PictureAttach} alt="pictureAttach"/>
            <div>배달앱 캡쳐사진 첨부하기</div>
        </Button>
    )
}

export default RidingPictureButton