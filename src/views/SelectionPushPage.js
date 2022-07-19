import React, {useContext} from 'react'
import Lottie from 'lottie-react'
import {paperAirplane} from '../images/assets'
import styled from 'styled-components'
import GlobalContext from '../contexts/store'
import { registerRidingInfo } from '../service'

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
const CheckButtonWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  padding: 20px;
  bottom: 0;
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
const CancelButton = styled(CommonButton)`
  background-color: #CDDEFF;
  color: #0057FF;
  margin-right: 5px;
`
const AcceptButton = styled(CommonButton)`
  background-color: ${(props) => props.theme.mainBlue};
  margin-left: 5px;
`

function SelectionPushPage() {
  const { state, setState } = useContext(GlobalContext);

  const messageAfterRanking = async (agree) => {
    const result = await registerRidingInfo({ 
        phoneNum: state.phoneNum,
        imageCnt: state.imageCnt,
        message: agree
     })

     if(agree) {
        setState({ page: 4, phoneNum: '', imageCnt: 0 })
     } else {
        setState({ page: 0, phoneNum: '', imageCnt: 0 })
     }
  }

  return (
    <>
      <Wrapper>
        <Title>나의 라이딩 정보가 <br/> 입력되었어요!</Title>
        <SubTitle>집계가 끝나고 랭킹에 반영되면 알려드릴까요?</SubTitle>
        <Lottie animationData={paperAirplane} style={{marginTop: '110px'}}/>
      </Wrapper>

      <CheckButtonWrapper>
        <CancelButton onClick={()=> messageAfterRanking(false)}>괜찮아요</CancelButton>
        <AcceptButton onClick={()=> messageAfterRanking(true)}>알림받기</AcceptButton>
      </CheckButtonWrapper>
    </>
  )
}

export default SelectionPushPage;