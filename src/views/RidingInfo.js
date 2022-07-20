import React, {useCallback, useContext, useMemo, useState} from 'react'
import styled from 'styled-components'
import BackHeader from '../components/BackHeader'
import CheckButton from '../components/CheckButton'
import GlobalContext from '../contexts/store'
import RidingPictureAddButton from '../components/RidingPictureAddButton'
import IconRightArrowBlue from '../images/icon-right-arrow-blue.png'
import IconCertification from '../images/icon-certification.png'
import RidingPicture from '../components/RidingPicture'
import InputPhoneNumModal from '../components/InputPhoneNumModal'
import handleFirebaseUpload from '../firebaseStorage'
import ImgBanner from '../images/img-banner.png'
import { CircularProgress } from '@mui/material'
import { registerRidingInfo } from '../service'


const Wrapper = styled.div`
  padding: 30px 0px 30px 0px;
`

const Header = styled.div`
    padding-left: 30px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`

const CertificationGuide = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 10px;

    & > b {
        font-weight: 700;
    }

    & > img {
        width: 18px;
        height: 18px;
    }
`

const CaptureGuide = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 700;
  color: #2662D5;

  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  
  span {
    cursor: pointer;
  }

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
  margin-left: 30px;
  margin-right: 30px;
  
  label {
    cursor: pointer;
  }
`

const Bannder = styled.div`
  overflow:scroll;
  width: 100%;
  -ms-overflow-style: none;
  ::-webkit-scrollbar{
    display: none;
  }

  max-width: 430px;
  position: fixed;
  bottom: 110px;

  //margin-top: 20px;
  //margin-left: 10px;
  //margin-right: 10px;

  & > img {
    height: 80px;
    margin-top: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
`

const LoadingWT = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`

function RidingInfo() {
  const {setState} = useContext(GlobalContext)
  const [files, setFiles] = useState([])
  const [checkButton, setCheckButton] = useState({text: "먼저 사진을 첨부해주세요", enabled: false})

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)

  const onFileChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
        if(files.length === 4) {
            alert("사진은 최대 4개까지 등록할 수 있어요")
            return
        }

       setFiles(files => ([...files, e.target.files[0]]))
    }
  }, [files.length])

  const onRemovePicture = useCallback((idx) => {
    setFiles(files => files.filter((file, index) => idx !== index))
  }, [])

  const onCheckMyRidingRank = useCallback(() => {
    if(checkButton.enabled === false) return

    setIsModalVisible(true)
  }, [checkButton.enabled])

  const checkFiles = useCallback(() => {
    if(files.length === 0) {
        setCheckButton(checkButton => ({...checkButton, text: "먼저 사진을 첨부해주세요", enabled: false}))
    } else {
        setCheckButton(checkButton => ({...checkButton, text: "나의 라이딩 순위 확인하기", enabled: true}))
    }
  }, [files.length])

  useMemo(() => checkFiles(), [checkFiles])

  const onCompleteInput = useCallback(async (phoneNumber) => {
    let regExp = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/

    if(phoneNumber === undefined || phoneNumber.length === 0) {
        alert("휴대전화번호를 입력해주세요")
        return
    }

    if(!regExp.test(phoneNumber)) {
        alert("휴대전화번호 형식이 올바르지 않아요")
        return
    }

    setLoading(true)
    for(const file of files) {
        const result = await handleFirebaseUpload(phoneNumber, file)

        if(result === "FAILURE-UPLOAD") {
            alert("사진올리기에 실패했어요")
            setLoading(false)
            return
        }
    }

    const result = await registerRidingInfo({ 
        phoneNum: phoneNumber,
        imageCnt: files.length,
     })

     setLoading(false)
     setIsModalVisible(false)
     setState({ page: 4 })
     localStorage.setItem('phoneNumber', phoneNumber)
  }, [files, setState])

  return (
    <>
      <Wrapper>
        <Header>
            <BackHeader onClick={() => setState({page: 1})}/>
        </Header>

        <Title>
          캡쳐 사진을<br/>업로드해주세요
        </Title>

        {/*<CertificationGuide>*/}
        {/*    배달앱 캡쳐 사진으로 인증하면&nbsp;*/}
        {/*    <b>인증마크</b>*/}
        {/*    <img src={IconCertification} alt="icon-certification"/>*/}
        {/*    가 표시돼요*/}
        {/*</CertificationGuide>*/}

        <CaptureGuide onClick={() => setState({page: 1})}>
          <span>캡쳐 방법 다시보기</span>
          <img src={IconRightArrowBlue} alt="icon-right-arrow-blue"/>
        </CaptureGuide>

        <RidingPictureBoard>
          <RidingPictureAddButton onFileChange={onFileChange}/>

          {files && files.map((file, index) => {
            return <RidingPicture key={index} index={index} file={file} onRemovePicture={onRemovePicture}/>
          })}
        </RidingPictureBoard>
      </Wrapper>

      {loading && 
        <LoadingWT>
            <CircularProgress />
        </LoadingWT> 
      }

        <Bannder>
            <img src={ImgBanner} alt="img-banner" />
        </Bannder>

      <CheckButton text={checkButton.text} enabled={checkButton.enabled} onClick={onCheckMyRidingRank}/>
      <InputPhoneNumModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} onCompleteInput={onCompleteInput}/>
    </>
  )
}

export default RidingInfo