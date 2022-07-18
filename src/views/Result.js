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
        <Title>나의 라이딩 정보가 <br/> 입력되었어요!</Title>
        <SubTitle>집계가 끝나면 오늘의 라이더 랭킹에 반영돼요.</SubTitle>
        <Lottie animationData={mopedRiderLottie} style={{marginTop: '110px'}}/>
      </Wrapper>
      <CheckButton text={'랭킹으로 돌아가기'} onClick={() => setState({page: 0})}/>
    </>
  )
}

export default Result;