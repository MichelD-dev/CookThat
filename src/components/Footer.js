import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faSquarePlus,
  faHeart,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'

const Footer = ({ onShowModal }) => {
  return (
    <footer
      className='ui  five item menu'
      style={{
        position: 'fixed',
        bottom: 0,
        height: '50px',
        width: '100%',
        backgroundColor: '#eee',
        opacity: '.8',
      }}
    >
      <a href='/' className='item'>
        <FontAwesomeIcon icon={faHouseChimney} size='2x' color='#333' />
      </a>
      <a href='/addRecipe' className='item'>
        <FontAwesomeIcon icon={faSquarePlus} size='2x' color='#333' />
      </a>
      <a href='/' className='item'>
        <img src='../assets/images/logo.svg' alt='' />
      </a>
      <a href='/' className='item'>
        <FontAwesomeIcon icon={faHeart} size='2x' color='#333' />
      </a>
      <button className='ui basic button' onClick={onShowModal}>
        <FontAwesomeIcon icon={faUserLarge} size='2x' color='#333' />
      </button>
    </footer>
  )
}

export default Footer
