import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import CheckButton from './CheckButton'

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
`

function InputPhoneNumModal({isModalVisible, setIsModalVisible}) {

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
          transition={{duration: 0.4}}
        >
          test

          <CheckButton text={'돌아가기'} onClick={() => setIsModalVisible(false)}/>
        </Modal>
      </ModalWrapper>
    )}
  </AnimatePresence>)
}

export default InputPhoneNumModal;