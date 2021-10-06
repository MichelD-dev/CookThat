import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faSquarePlus,
  faHeart,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <footer
        style={{ position: 'fixed', bottom: 0, height: '50px', width: '100%' }}
        className='ui segment '
      >
        <div className='ui container'>
          <FontAwesomeIcon icon={faHouseChimney} />
          <FontAwesomeIcon icon={faSquarePlus} />
          <img src='../assets/images/logo.svg' alt='' />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUserLarge} />
        </div>
      </footer>
    </div>
  )
}

export default Footer
