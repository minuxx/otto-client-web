import React, {useContext} from 'react'
import styled from 'styled-components'
import Lottie from 'lottie-react'
import {mopedRiderLottie} from '../images/assets'
import CheckButton from '../components/CheckButton'
import GlobalContext from '../contexts/store'

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
  margin-top: 10px;
`

function Result() {
  const {setState} = useContext(GlobalContext);

  return (
    <>
      <Wrapper>
        <Title>랭킹에 반영되면 <br/> 알려드릴게요</Title>
        <SubTitle>등록하신 전화번호로 알림이 발송될 예정이에요.</SubTitle>
        <Lottie animationData={mopedRiderLottie} style={{marginTop: '110px'}}/>
      </Wrapper>
      <CheckButton text={'랭킹으로 돌아가기'} enabled={true} onClick={() => setState({page: 0})}/>
    </>
  )
}

export default Result;