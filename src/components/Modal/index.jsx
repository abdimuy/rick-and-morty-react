import React from 'react'
import ReactModal from 'react-modal'

const Modal = ({ children, isOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        // overlay: { filter: 'blur(0px)' },
        content: { backgroundColor: 'rgba(255, 255, 255, 0)', filter: 'blur(0px)' }
      }}
    >
      {children}
    </ReactModal>
  )
}

export default Modal
