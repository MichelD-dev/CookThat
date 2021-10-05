import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

const InscriptionForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const send = async ev => {
    ev.preventDefault()

    if (password === password2) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential.user)
    }
  }

  return (
    <>
      <form className='ui form container' onSubmit={send}>
        <h2>Inscription</h2>
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
        <button className='fluid ui button'>Inscription</button>
      </form>
    </>
  )
}

export default InscriptionForm
