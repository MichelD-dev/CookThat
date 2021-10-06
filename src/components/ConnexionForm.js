import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

const ConnexionForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const send = async ev => {
    ev.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      console.log(userCredential.user)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <>
      <form className='ui form container' onSubmit={send}>
        <h2>Connexion</h2>
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
        <br/>
        <a href='/inscription'>Créer un compte</a>
      </form>
    </>
  )
}

export default ConnexionForm
