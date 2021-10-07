import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faSquarePlus,
  faHeart,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'

const Footer = ({ onShowModal, user }) => {
  const checkUserStatus = e => {
    if (user) {
      return
    }
    e.preventDefault()
    onShowModal()
  }

  return (
    <footer
      className='ui five item menu'
      style={{
        position: 'fixed',
        bottom: 0,
        height: '60px',
        width: '100%',
        backgroundColor: '#eee',
        opacity: '.8',
      }}
    >
      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link to='/' className='ui basic button item'>
        <FontAwesomeIcon icon={faHouseChimney} size='2x' color='#333' />
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link
        onClick={checkUserStatus}
        to='/addrecipe'
        className='ui basic button item'
      >
        <FontAwesomeIcon icon={faSquarePlus} size='2x' color='#333' />
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link to='/' className='ui basic button item'>
        <img src='../assets/images/logo.svg' alt='' />
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link
        onClick={checkUserStatus}
        to='/favoris'
        className='ui basic button item'
      >
        <FontAwesomeIcon icon={faHeart} size='2x' color='#333' />
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link
        onClick={checkUserStatus}
        to='/profile'
        className='ui basic button item'
      >
        <FontAwesomeIcon icon={faUserLarge} size='2x' color='#333' />
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}
    </footer>
  )
}

export default Footer
