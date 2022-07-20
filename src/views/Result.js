import React, {useContext} from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import {mopedRiderLottie} from '../images/assets'
import GlobalContext from '../contexts/store'
import CheckTwoButton from '../components/CheckTwoButton'

const Wrapper = styled.div`
  padding: 30px;
`
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-top: 58px;
  line-height: 32px;
`
const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
`

function Result() {
  const {setState} = useContext(GlobalContext);

  return (
    <>
      <Wrapper>
        <Title>랭킹에 반영되면 <br/> 알려드릴게요</Title>
        <SubTitle>등록하신 전화번호로 알림이 발송될 예정이에요.</SubTitle>
        <Lottie animationData={mopedRiderLottie}/>
      </Wrapper>

      <CheckTwoButton
        firstButton={{
          onClick: () => console.log('first'),
          text: <a target={'_blank'} href={'https://open.kakao.com/o/s32uFZqe'}>문의하기</a>
        }}
        secondButton={{onClick: () => setState({page: 0}), text: '랭킹으로 돌아가기'}}
        subText={<>혹시 서비스에 궁금하거나 제안할 내용이 있으신가요?<br></br>아래 문의하기 버튼을 눌러 연락주세요!</>}
      />
    </>
  )
}

export default Result;