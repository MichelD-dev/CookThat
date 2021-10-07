import { createPortal } from 'react-dom'

const Background = ({ onHideModal }) => {
  return (
    <div
      onClick={onHideModal}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 20,
        backgroundColor: 'rgba(200, 255, 255, 0)',
      }}
    ></div>
  )
}

const Overlay = props => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20vh',
        opacity: '.8',
        width: '100%',
        color: '#666',
        backgroundColor: 'white',
        padding: '1rem',
        zIndex: 30,
      }}
    >
      <div
        style={{
          opacity: '1',
        }}
      >
        {props.children}{' '}
      </div>
    </div>
  )
}

const modal = document.getElementById('modal')

const Modal = ({ onHideModal, children }) => {
  return (
    <>
      {createPortal(<Background onHideModal={onHideModal} />, modal)}
      {createPortal(<Overlay>{children} </Overlay>, modal)}
    </>
  )
}
export default Modal
