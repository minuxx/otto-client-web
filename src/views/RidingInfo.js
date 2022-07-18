import React, {useCallback, useContext, useState} from 'react'
import styled from 'styled-components'
import BackHeader from '../components/BackHeader'
import RidingInfoInput from '../components/RidingInfoInput'
import RidingPictureButton from '../components/RidingPictureButton'
import CheckButton from '../components/CheckButton'
import GlobalContext from '../contexts/store'
import RidingPictureAddButton from '../components/RidingPictureAddButton'
import IconRightArrowBlue from '../images/icon-right-arrow-blue.png'
import RidingPicture from '../components/RidingPicture'


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

const CertificationGuide = styled.div`
    font-size: 14px;
    margin-top: 20px;
`

const CaptureGuide = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 700;
    color: #2662D5;

    margin-top: 10px;

    & > img {
        width: 15px;
        height: 15px;
        margin-left: 3px;
    }
`

const RidingPictureBoard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1rem;

    margin-top: 25px;
`

const DivisionText = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;

    margin-top: 35px;
`

function RidingInfo() {
  const {setState} = useContext(GlobalContext)
  const [files, setFiles] = useState([])

  const onFileChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
       setFiles(files => ([...files, e.target.files[0]]))
    }
 }, [])

  return (
    <>
      <Wrapper>
        <BackHeader></BackHeader>
        <Title>
          오늘의 라이딩 정보를<br></br>알려주세요
        </Title>

        {/* ver 1 */}
        {/* <RidingPictureButton/>
        <DivisionText>또는 직접 입력할 수도 있어요</DivisionText>

        <RidingInfoInput inputSetting={{label: '오늘 달린 거리', hint: '총 주행 거리', unit: 'km'}}/>
        <RidingInfoInput inputSetting={{label: '오늘 완료한 배달', hint: '총 배달 건수', unit: '건'}}/>
        <RidingInfoInput inputSetting={{label: '오늘 번 돈', hint: '총 배달 수입', unit: '원'}}/> */}

        {/* ver 2 */}
        <CertificationGuide>배달앱 캡쳐 사진으로 인증하면 인증마크가 표시돼요</CertificationGuide>
        <CaptureGuide>
            캡쳐 방법 가이드
            <img src={IconRightArrowBlue} alt="icon-right-arrow-blue" />
        </CaptureGuide>

        <RidingPictureBoard>
            <RidingPictureAddButton onFileChange={onFileChange}/>

            {files && files.map((file, index) => {
                return <RidingPicture key={index} file={file} />
            })}
        </RidingPictureBoard>
      </Wrapper>
      <CheckButton text={'나의 라이딩 순위 확인하기'} onClick={() => setState({page:0})}/>
    </>
  )
}

export default RidingInfo