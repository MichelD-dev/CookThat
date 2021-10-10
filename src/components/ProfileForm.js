import { useHistory } from 'react-router-dom'
import { Button, Container, Form } from 'semantic-ui-react'

const ProfileForm = ({ userDisconnect, user }) => {
  const history = useHistory()

  if (!user) {
    history.push('/')
  }

  return (
    <Container>
      <Form style={{ padding: '40px 0 100px', color: '#666' }}>
        <h2>Mon profil</h2>
        <br />
        <Button>Mes recettes</Button>
        <Button onClick={() => history.push('/favoris')}>Mes favoris</Button>
        <Form.Field readOnly>
          <br />
          <label htmlFor='email'>Email:</label>
          <Form.Input placeholder={user} readOnly type='email' id='email' />
        </Form.Field>
        <Form.Field required>
          <label htmlFor='user'>Nom d'utilisateur:</label>
          <Form.Input type='text' id='user' />
        </Form.Field>
        <Form.Field required>
          <label htmlFor='password'>Nouveau mot de passe:</label>
          <Form.Input type='password' id='password' />
        </Form.Field>
        <br />
        <Button type='submit'>Mettre à jour mes informations</Button>
        <br />
        <Button
          basic
          color='blue'
          size='mini'
          onClick={userDisconnect}
          style={{ marginTop: '30px' }}
        >
          Déconnexion
        </Button>
      </Form>
    </Container>
  )
}

export default ProfileForm
