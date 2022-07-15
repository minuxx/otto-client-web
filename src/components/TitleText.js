import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  padding: 10px 30px;
`
const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 800;

  div:nth-child(2) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`
const SubTitle = styled.div`
font-size: 15px;
`

function TitleText() {

  return (
    <Wrapper>
      <MainTitle>
        <div>오늘 나의 배달</div>
        <div>주행거리는 몇 위?</div>
      </MainTitle>
      <SubTitle>오늘 끝낸 배달을 입력하면 순위를 알려드려요.</SubTitle>
    </Wrapper>
  )
}

export default TitleText;