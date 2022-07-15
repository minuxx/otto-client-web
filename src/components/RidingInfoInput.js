import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-top: 35px;
`

const Label = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    padding: 22px 20px 12px 10px;
`

const Input = styled.input`
    width: 100%;
    border: 0;

    &:focus {
        outline: none;
    }
`

const Unit = styled.div`
    font-size: 14px;
    font-weight: 700;
`

function RidingInfoInput({ inputSetting }) {
    const { label, hint, unit } = inputSetting

    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputWrapper>
                <Input type="text" placeholder={hint} />
                <Unit>{unit}</Unit>
            </InputWrapper>
        </Wrapper>
    )
}

export default RidingInfoInput