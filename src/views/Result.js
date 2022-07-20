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
  margin-top: 20px;
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;

  width: 430px;
  padding: 20px;
`

const ContactGuide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 15px;
  color: #A9B0B9;
  margin-bottom: 30px;
`

const ButtonWT = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  color: white;

  display: flex;
  justify-content: center;
`

const ContactButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: none;
  height: 60px;
  border-radius: 20px;
  background-color: #D5E0F7;
  color: #2662D5;

  margin-right: 10px;
  cursor: pointer;
`

const RankingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: none;
  height: 60px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.mainBlue};
  cursor: pointer;
`

function Result() {
  const {setState} = useContext(GlobalContext);

  return (
    <>
      <Wrapper>
        <Title>랭킹에 반영되면 <br/> 알려드릴게요</Title>
        <SubTitle>등록하신 전화번호로 알림이 발송될 예정이에요.</SubTitle>
        <Lottie animationData={mopedRiderLottie} style={{marginTop: '60px'}}/>
      </Wrapper>

      <Footer>
        <ContactGuide>혹시 서비스에 궁금하거나 제안할 내용이 있으신가요?<br></br>아래 문의하기 버튼을 눌러 연락주세요!</ContactGuide>
        <ButtonWT>
          <ContactButton><a target={'_blank'} href={'https://open.kakao.com/o/s32uFZqe'}>문의하기</a></ContactButton>
          <RankingButton onClick={() => setState({ page: 0 })}>랭킹으로 돌아가기</RankingButton>
        </ButtonWT>
      </Footer>
      {/* <CheckButton text={'랭킹으로 돌아가기'} enabled={true} onClick={() => setState({page: 0})}/> */}
    </>
  )
}

export default Result;