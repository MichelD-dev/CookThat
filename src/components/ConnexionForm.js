import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import Modal from './Modal'

const ConnexionForm = ({
  authenticate,
  hideConnexionModal,
  showInscriptionModal,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const inscriptionModal = e => {
    e.preventDefault()
    hideConnexionModal()
    showInscriptionModal()
  }

  const send = async ev => {
    ev.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      hideConnexionModal()
      authenticate(userCredential.user.auth.currentUser.email)

      localStorage.setItem(
        'userCredentials',
        userCredential.user.auth.currentUser.email
      )
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <Modal onHideModal={hideConnexionModal}>
      <form className='ui form container' onSubmit={send}>
        <h3 style={{ textAlign: 'center' }}>Connexion</h3>
        <div className='field'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Mot de passe:</label>
          <input
            type='password'
            id='password'
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button className='fluid ui button'>Connexion</button>
        <br />
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <a onClick={inscriptionModal} href='/inscription'>
            Créer un compte
          </a>
        </div>
      </form>
    </Modal>
  )
}

export default ConnexionForm
