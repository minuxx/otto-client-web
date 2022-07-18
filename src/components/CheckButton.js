import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 20px;
  font-size: 30px;
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  font-size: 16px;
  border: none;
  color: white;
  font-weight: 700;
  width: 350px;
  height: 60px;
  border-radius: 20px;
  background-color: ${(props) => props.enabled ? props.theme.mainBlue : props.theme.greyColor};
`

function CheckButton({text, onClick, enabled}) {

  return (
    <Wrapper>
      <Button onClick={onClick} enabled={enabled}>{text}</Button>
    </Wrapper>
  )
}

export default CheckButton;