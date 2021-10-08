import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import Modal from './Modal'

const InscriptionForm = ({
  inscription,
  onHideModal,
  hideInscriptionModal,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const send = async e => {
    e.preventDefault()

    if (password === password2) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      inscription(userCredential.user.auth.currentUser.email)
      hideInscriptionModal()
    }
  }

  return (
    <Modal onHideModal={hideInscriptionModal}>
      <form className='ui form container' onSubmit={send}>
        <h3 style={{ textAlign: 'center' }}>Inscription</h3>
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
        <div className='field'>
          <label htmlFor='password2'>Répétez votre mot de passe:</label>
          <input
            type='password'
            id='password2'
            onChange={e => setPassword2(e.currentTarget.value)}
          />
        </div>
        <button className='fluid ui button'>S'inscrire</button>
      </form>
    </Modal>
  )
}

export default InscriptionForm
