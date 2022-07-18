import React, {useContext} from 'react'
import styled from 'styled-components'
import BackHeader from '../components/BackHeader'
import RidingInfoInput from '../components/RidingInfoInput'
import RidingPictureButton from '../components/RidingPictureButton'
import CheckButton from '../components/CheckButton'
import GlobalContext from '../contexts/store'

const Wrapper = styled.div`
  padding: 30px;
  ß
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  margin-top: 30px;
`

function RidingInfo() {
  const {setState} = useContext(GlobalContext)

  return (
    <>
      <Wrapper>
        <BackHeader></BackHeader>
        <Title>
          오늘의 라이딩 정보를<br></br>알려주세요
        </Title>

        <RidingPictureButton/>

        <RidingInfoInput inputSetting={{label: '오늘 달린 거리', hint: '총 주행 거리', unit: 'km'}}/>
        <RidingInfoInput inputSetting={{label: '오늘 완료한 배달', hint: '총 배달 건수', unit: '건'}}/>
        <RidingInfoInput inputSetting={{label: '오늘 번 돈', hint: '총 배달 수입', unit: '원'}}/>
      </Wrapper>
      <CheckButton text={'나의 라이딩 순위 확인하기'} onClick={() => setState({page:0})}/>
    </>
  )
}

export default RidingInfo