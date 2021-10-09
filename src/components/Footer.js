import { Link } from 'react-router-dom'

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
        <div>
          <i className='home black big icon '></i>
        </div>
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link
        onClick={checkUserStatus}
        to='/addrecipe'
        className='ui basic button item'
      >
        <div>
          <i className='plus square black big icon'></i>
        </div>
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
        <div>
          <i className='heart black big icon'></i>
        </div>
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}

      <Link
        onClick={checkUserStatus}
        to='/profile'
        className='ui basic button item'
      >
        <div>
          <i className='user black big icon'></i>
        </div>
      </Link>

      {/*---------------------------------------------------------*/}
      {/*---------------------------------------------------------*/}
    </footer>
  )
}

export default Footer
