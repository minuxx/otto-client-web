import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

function InputPhoneNumModal({isModalVisible}) {

  return (<AnimatePresence>
    {isModalVisible && (
      <motion.div>

      </motion.div>
    )}
  </AnimatePresence>)
}

export default InputPhoneNumModal;