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
          {/*TODO Faire apparaitre le User.email en dur dans le champ*/}
          <br />
          <label htmlFor='email'>Email:</label>
          <Form.Input readOnly type='email' id='email' />
        </Form.Field>
        <Form.Field>
          <label htmlFor='user'>Nom d'utilisateur:</label>
          <input type='text' id='user' />
        </Form.Field>
        <Form.Field>
          <label htmlFor='password'>Nouveau mot de passe:</label>
          <input type='password' id='password' />
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
