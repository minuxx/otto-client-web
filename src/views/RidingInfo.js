import React, {useCallback, useContext, useMemo, useState} from 'react'
import styled from 'styled-components'
import BackHeader from '../components/BackHeader'
import CheckButton from '../components/CheckButton'
import GlobalContext from '../contexts/store'
import RidingPictureAddButton from '../components/RidingPictureAddButton'
import IconRightArrowBlue from '../images/icon-right-arrow-blue.png'
import RidingPicture from '../components/RidingPicture'
import InputPhoneNumModal from '../components/InputPhoneNumModal'


const Wrapper = styled.div`
  padding: 30px;
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

function RidingInfo() {
  const {setState} = useContext(GlobalContext)
  const [files, setFiles] = useState([])
  const [checkButton, setCheckButton] = useState({text: "먼저 사진을 첨부해주세요", enabled: false})

  const [isModalVisible,setIsModalVisible] = useState(true);

  const onFileChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
       setFiles(files => ([...files, e.target.files[0]]))
    }
  }, [])

  const onRemovePicture = useCallback((idx) => {
    setFiles(files => files.filter((file, index) => idx !== index))
  }, [])

  const onCheckMyRidingRank = useCallback(() => {
    if(checkButton.enabled === false) return


  }, [checkButton.enabled])

  const checkFiles = useCallback(() => {
    if(files.length === 0) {
        setCheckButton(checkButton => ({...checkButton, text: "먼저 사진을 첨부해주세요", enabled: false}))
    } else {
        setCheckButton(checkButton => ({...checkButton, text: "나의 라이딩 순위 확인하기", enabled: true}))
    }
  }, [files.length])

  useMemo(() => checkFiles(), [checkFiles])

  return (
    <>
      <Wrapper>
        <BackHeader></BackHeader>
        <Title>
          오늘의 라이딩 정보를<br></br>알려주세요
        </Title>

        <CertificationGuide>배달앱 캡쳐 사진으로 인증하면 인증마크가 표시돼요</CertificationGuide>
        <CaptureGuide>
            캡쳐 방법 가이드
            <img src={IconRightArrowBlue} alt="icon-right-arrow-blue" />
        </CaptureGuide>

        <RidingPictureBoard>
            <RidingPictureAddButton onFileChange={onFileChange}/>

            {files && files.map((file, index) => {
                return <RidingPicture key={index} index={index} file={file} onRemovePicture={onRemovePicture}/>
            })}
        </RidingPictureBoard>
      </Wrapper>

      <InputPhoneNumModal isModalVisible={isModalVisible} />
      <CheckButton text={checkButton.text} enabled={checkButton.enabled} onClick={onCheckMyRidingRank}/>
    </>
  )
}

export default RidingInfo