import React from "react"

type ModalProps = {
  name: string
  onClose: () => void
  children: React.ReactNode
}

function Modal({ name, onClose, children }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
      <div
        className="opactity-50 absolute h-full w-full bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div
        role="dialog"
        className="z-50 mx-auto h-full w-full overflow-y-auto bg-white p-4 shadow-lg md:h-1/2 md:w-6/12 md:rounded-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl">{name}</h1>
          <button onClick={onClose}>
            <svg fill="none" viewBox="0 0 16 16" className="h-4 w-4">
              <path
                fill="#0F172A"
                fillRule="evenodd"
                d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <hr className="mb-4" />
        {children}
      </div>
    </div>
  )
}

export default Modal
