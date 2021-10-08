import { Redirect } from "react-router"

const ProfileForm = ({ userDisconnect, user }) => {
if (!user) {
  return <Redirect to='/'/>
}

  return (
    <>
      <form
        className='ui form container'
        style={{ padding: '40px 0 100px', color: '#666' }}
      >
        <h2>Mon profil</h2>
        <br />
        <button className='ui button' type='button'>
          Mes recettes
        </button>
        <button className='ui button' type='button'>
          Mes favoris
        </button>
        <div className='field'>
          <br />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />
        </div>
        <div className='field'>
          <label htmlFor='user'>Nom d'utilisateur:</label>
          <input type='text' id='user' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Nouveau mot de passe:</label>
          <input type='password' id='password' />
        </div>
        <br />
        <button className='ui button' type='submit'>
          Mettre à jour mes informations
        </button>
        <br />
        <button
          className='mini ui primary basic button'
          onClick={userDisconnect}
          style={{ marginTop: '30px' }}
        >
          Déconnexion
        </button>
      </form>
    </>
  )
}

export default ProfileForm
