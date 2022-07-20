import React, {useContext} from 'react'
import BackHeader from '../components/BackHeader'
import styled from 'styled-components'
import ImageUploadExample from '../components/ImageUploadExample'
import baemin from '../images/baemin.png'
import coupang from '../images/coupang.png'
import barogo from '../images/barogo.png'
import GlobalContext from '../contexts/store'
import CheckButton from '../components/CheckButton'

const Wrapper = styled.div`
  padding: 30px;
`
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  margin-top: 30px;
`
const InformText = styled.div`
  font-size: 14px;
  margin-top: 20px;
  line-height: 20px;

  div:first-child {
    font-weight: 700;
  }
`
const ImageUploadExampleWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 10px;
`

function ImageUploadInform() {
  const {setState} = useContext(GlobalContext);

  return (
    <Wrapper>
      <BackHeader onClick={() => setState({page: 1})}/>
      <Title>
        배달앱 캡쳐사진을<br/>첨부해주세요
      </Title>
      <InformText>
        <div>인증 지원 서비스 :</div>
        <div>배민커넥트, 쿠팡이츠, 생각대로, 바로고, 부릉</div>
      </InformText>

      <ImageUploadExampleWrapper>
        <ImageUploadExample
          imgSrc={baemin}
          informText={
            <>
              <div style={{fontWeight: 700}}>배민커넥트 APP</div>
              <div>&rarr; 마이페이지 &rarr; 완료건수</div>
              <div>&rarr; 오늘 배달 내역 <span style={{fontWeight: 700}}>캡쳐</span></div>
            </>
          }
        />

        <ImageUploadExample
          imgSrc={coupang}
          informText={
            <>
              <div style={{fontWeight: 700}}>쿠팡이츠 배달파트너 APP</div>
              <div>&rarr; 왼쪽 상단 프로필</div>
              <div>&rarr; 내 수입 &rarr; 날짜 선택 후 <span style={{fontWeight: 700}}>캡쳐</span></div>
            </>
          }
        />

        <ImageUploadExample
          imgSrc={barogo}
          informText={
            <>
              <div style={{fontWeight: 700}}>바로고 APP</div>
              <div>&rarr; 매출통계 &rarr; 일별매출 <span style={{fontWeight: 700}}>캡쳐</span></div>
            </>
          }
        />
      </ImageUploadExampleWrapper>

      <CheckButton text={'확인했어요!'} enabled={true} onClick={() => setState({page: 1})}/>
    </Wrapper>
  )
}

export default ImageUploadInform