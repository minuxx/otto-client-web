import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 430px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  padding: 20px;
`

const CommonButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 16px;
  border: none;
  color: white;
  font-weight: 700;
  border-radius: 20px;
`
const FirstButton = styled(CommonButton)`
  background-color: #CDDEFF;
  color: #0057FF;
  margin-right: 5px;
  cursor: pointer;
`
const SecondButton = styled(CommonButton)`
  background-color: ${(props) => props.theme.mainBlue};
  margin-left: 5px;
  cursor: pointer;
`


const SubText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 22px;

  font-size: 14px;
  color: #A9B0B9;
  margin: 10px 39px;
`


function CheckTwoButton({firstButton, secondButton, subText}) {

  return (
    <Wrapper>
      <SubText>{subText}</SubText>
      <ButtonWrapper>
        <FirstButton onClick={firstButton.onClick}>{firstButton.text}</FirstButton>
        <SecondButton onClick={secondButton.onClick}>{secondButton.text}</SecondButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default CheckTwoButton