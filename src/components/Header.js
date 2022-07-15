import React from 'react'
import styled from 'styled-components'
import title from '../images/title.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 17px 15px;
`
const EmptySpace = styled.div`
  flex: 1;
`
const HeaderTitle = styled.div`
  flex: 3;
  font-size: 25px;
  font-weight: 800;

  img {
    width: 140px
  }
`

const Inquire = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  div {
    font-size: 13px;
    width: 80px;
    text-align: center;
    padding: 5px;
    background-color: ${(props) => props.theme.subBlue};
    border-radius: 10px;
    font-weight: 600;
  }
`

function Header() {

  return (
    <Wrapper>
      <EmptySpace />
      <HeaderTitle>
        <img src={title}/>
      </HeaderTitle>
      <Inquire>
        <div>문의하기</div>
      </Inquire>
    </Wrapper>
  )
}

export default Header;