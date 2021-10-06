const ProfileForm = () => {
  return (
    <>
      <form className='ui form container'>
        <h2>Mon profil</h2>
        <button className='ui button' type='button'>
          Mes recettes
        </button>
        <button className='ui button' type='button'>
          Mes favoris
        </button>
        <div className='field'>
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
        <button className='ui button' type='submit'>
          Mettre à jour mes informations
        </button>
      </form>
    </>
  )
}

export default ProfileForm