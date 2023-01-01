import React from "react"

type ModalProps = {
  onClose: () => void
  children: React.ReactNode
}

function Modal({ onClose, children }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
      <div
        className="opactity-50 absolute h-full w-full bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="z-50 mx-auto w-10/12 max-w-xs overflow-y-auto rounded-lg bg-white p-4 shadow-lg sm:w-6/12">
        {children}
      </div>
    </div>
  )
}

export default Modal
