import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import Modal from './Modal'
import { Button, Form } from 'semantic-ui-react'

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

  const send = async e => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      hideConnexionModal()
      authenticate(userCredential.user.auth.currentUser.email)
      console.log(userCredential.user) //TODO
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
      <Form onSubmit={send}>
        <h3 style={{ textAlign: 'center' }}>Connexion</h3>
        <Form.Field required>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            onChange={e => setEmail(e.currentTarget.value)}
            error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
          />
        </Form.Field>
        <Form.Field required>
          <label htmlFor='password'>Mot de passe:</label>
          <input
            type='password'
            id='password'
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </Form.Field>
        {error && <p>{error}</p>}
        <Button fluid>Connexion</Button>
        <br />
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <a onClick={inscriptionModal} href='/inscription'>
            Cr??er un compte
          </a>
        </div>
      </Form>
    </Modal>
  )
}

export default ConnexionForm
