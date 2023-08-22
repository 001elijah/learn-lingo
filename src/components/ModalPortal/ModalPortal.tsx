import React from 'react'
import ReactDOM from "react-dom";
import Backdrop from '../Backdrop/Backdrop'

const modalRoot: any | null = document.getElementById("modal-root")
const windowRoot: any | null = document.getElementById("window-root")

const ModalPortal = ({ children, isModalOpen, setIsModalOpen }: { children: any;  isModalOpen: boolean; setIsModalOpen: Function}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
        modalRoot
      )}
      {ReactDOM.createPortal(
        children,
        windowRoot
      )}
    </div>
  )
}

export default ModalPortal