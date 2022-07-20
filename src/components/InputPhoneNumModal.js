import React, {useCallback, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import IconChecked from '../images/icon-checked.png'
import IconNotChecked from '../images/icon-not-checked.png'
import {CircularProgress} from '@mui/material'

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const Modal = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-color: #fff;
  border-radius: 20px 20px 0px 0px;
  padding: 40px 30px 20px 30px;
`

const Title = styled(motion.div)`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
`

const Input = styled(motion.input)`
  font-size: 16px;
  width: 100%;
  height: 40px;
  border: 0;
  margin-top: 30px;
  padding: 10px;

  border-bottom: 1px solid #E5E5E5;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #CACED3;
  }
`
const AgreeReceivingInformation = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;

  margin-top: 10px;

  & > img {
    width: 24px;
    height: 24px;

    margin-right: 10px;
  }
`

const CollectPhoneNumberGuide = styled.div`
  font-size: 13px;
  margin-top: 42px;

  & > .title {
    font-size: 14px;
    font-weight: 700;
    color: #9A9A9A;
  }

  & > .content {
    color: #CACED3;
    margin-top: 5px;
    line-height: 18px;
  }

  & .link {
    text-decoration: underline;
  }
`

const ButtonWT = styled(motion.div)`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: white;

  margin-top: 30px;
`

const BackButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: none;
  height: 60px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.greyColor};

  margin-right: 10px;
  cursor: pointer;
`

const CompleteButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: none;
  height: 60px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.mainBlue};
  cursor: pointer;
`
const LoadingWT = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1000;

  justify-content: center;
  align-items: center;
`

function InputPhoneNumModal({isModalVisible, setIsModalVisible, onCompleteInput, loading}) {
  // const [checked, setChecked] = useState({marketing: false, termsAndConditions: false, personalInformation: false})
  const [inputPhone, setInputPhone] = useState('')

  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4
      }
    }
  };

  const onInputPhoneNumber = useCallback((e) => {
    const {name, value} = e.target
    setInputPhone(inputPhone => ({...inputPhone, [name]: value}))
  }, [])

  return (<AnimatePresence>
    {isModalVisible && (
      <ModalWrapper
        initial={'hidden'}
        animate={'visible'}
        exit={'hidden'}
        variants={overlayVariants}
      >
        <Modal
          initial={{y: "100vh"}}
          animate={{y: 0}}
          exit={{y: "100vh"}}
          transition={{duration: 0.4}}>

          <Title>랭킹 등록에 이용할<br></br>전화번호를 알려주세요</Title>
          <Input type="text" name="phoneNumber" placeholder="하이픈(-) 없이 입력해주세요" onChange={onInputPhoneNumber}
                 maxLength="11"/>

          {/* <AgreeReceivingInformation
            onClick={() => setChecked(prev => ({...prev, termsAndConditions: !prev.termsAndConditions}))}>
            <img src={checked.termsAndConditions ? IconChecked : IconNotChecked} alt="icon-check"/>
            <a target={'_blank'} href={'https://summer-echidna-7ed.notion.site/d25549a7e405445db1b0012b2f05a270'}>[필수]
              서비스 이용약관 동의</a>
          </AgreeReceivingInformation>

          <AgreeReceivingInformation
            onClick={() => setChecked(prev => ({...prev, personalInformation: !prev.personalInformation}))}>
            <img src={checked.personalInformation ? IconChecked : IconNotChecked} alt="icon-check"/>
            <a target={'_blank'} href={'https://summer-echidna-7ed.notion.site/f5f6204516d5481eb92b91059110598f'}>[필수]
              개인정보 처리방침 동의</a>
          </AgreeReceivingInformation>

          <AgreeReceivingInformation onClick={() => setChecked(prev => ({...prev, marketing: !prev.marketing}))}>
            <img src={checked.marketing ? IconChecked : IconNotChecked} alt="icon-check"/>
            <a target={'_blank'} href={'https://summer-echidna-7ed.notion.site/3310593caf624147a4f56beb0a9f2b0c'}>[선택]
              마케팅 정보 활용 및 광고성 정보 수신 동의</a>
          </AgreeReceivingInformation> */}

          <CollectPhoneNumberGuide>
            <div className='title'>랭킹 등록 및 조회를 위해 휴대폰 번호를 수집합니다.</div>
            <div className='content'>입력 완료를 하시면 <a target={'_blank'} className="link" href={'https://summer-echidna-7ed.notion.site/d25549a7e405445db1b0012b2f05a270'}>서비스 이용약관</a> , 
            <a target={'_blank'} className="link" href={'https://summer-echidna-7ed.notion.site/f5f6204516d5481eb92b91059110598f'}>개인정보 처리방침</a> , 
            <a target={'_blank'} className="link" href={'https://summer-echidna-7ed.notion.site/3310593caf624147a4f56beb0a9f2b0c'}>마케팅 수신</a> 에 동의됩니다. 동의를 거부할 수 있으나 이 경우 서비스를 이용하실 수 없습니다.</div>
          </CollectPhoneNumberGuide>

          <ButtonWT>
            <BackButton onClick={() => setIsModalVisible(false)}>돌아가기</BackButton>
            <CompleteButton onClick={() => onCompleteInput(inputPhone.phoneNumber)}>동의 후 등록</CompleteButton>
          </ButtonWT>
        </Modal>
      </ModalWrapper>
    )}

    {loading &&
      <LoadingWT key={'loading'}>
        <CircularProgress/>
      </LoadingWT>
    }
  </AnimatePresence>)
}

export default InputPhoneNumModal;