import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faSquarePlus,
  faHeart,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
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
      <a className='item'>
        <FontAwesomeIcon icon={faHouseChimney} size='xl' color='#333' />
      </a>
      <a className='item'>
        <FontAwesomeIcon icon={faSquarePlus} size='xl' color='#333' />
      </a>
      <a className='item'>
        <img src='../assets/images/logo.svg' alt='' />
      </a>
      <a className='item'>
        <FontAwesomeIcon icon={faHeart} size='xl' color='#333' />
      </a>
      <a className='item'>
        <FontAwesomeIcon icon={faUserLarge} size='xl' color='#333' />
      </a>
    </footer>
  )
}

export default Footer
