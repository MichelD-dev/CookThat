import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney,
  faSquarePlus,
  faHeart,
  faUserLarge,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='ui inverted vertical segment '>
      <div className='ui container'>
        <FontAwesomeIcon icon={faHouseChimney} />
        <FontAwesomeIcon icon={faSquarePlus} />
        <img src='../assets/images/logo.svg' alt='' />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faUserLarge} />
      </div>
    </footer>
  )
}

export default Footer
