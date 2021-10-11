import { BrowserRouter, Route } from 'react-router-dom'
import InscriptionForm from './InscriptionForm'
import ConnexionForm from './ConnexionForm'
import ProfileForm from './ProfileForm'
import AddRecipeForm from './AddRecipeForm'
import Favoris from './Favoris'
import Footer from './Footer'
import Accueil from './Accueil'
import { useState } from 'react'
import Recipe from './Recipe'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [modalConnexionIsShown, setModalConnexionIsShown] = useState(false)
  const [modalInscriptionIsShown, setModalInscriptionIsShown] = useState(false)
  const [user, setUser] = useState(
    localStorage.getItem('userCredentials') || null
  )

  const showConnexionModal = () => {
    setModalConnexionIsShown(true)
  }

  const hideConnexionModal = () => {
    setModalConnexionIsShown(false)
  }
  const showInscriptionModal = () => {
    setModalInscriptionIsShown(true)
  }

  const hideInscriptionModal = () => {
    setModalInscriptionIsShown(false)
  }

  const inscription = email => {
    setUser(email)
  }

  const userDisconnect = () => {
    setUser(null)
    localStorage.setItem('userCredentials', null)
  }

  const authenticate = email => {
    setUser(email)
  }

  return (
    <div
      style={{
        filter:
          (modalConnexionIsShown || modalInscriptionIsShown) && 'blur(8px)',
        opacity: (modalConnexionIsShown || modalInscriptionIsShown) && '.6',
      }}
    >
      {modalConnexionIsShown && (
        <ConnexionForm
          authenticate={authenticate}
          hideConnexionModal={hideConnexionModal}
          showInscriptionModal={showInscriptionModal}
          hideInscriptionModal={hideInscriptionModal}
        />
      )}
      {modalInscriptionIsShown && (
        <InscriptionForm
          inscription={inscription}
          hideInscriptionModal={hideInscriptionModal}
        />
      )}
      <BrowserRouter>
        <Route path='/' exact strict render={() => <Accueil user={user} />} />

        <Route
          path='/profile'
          exact
          strict
          render={() => (
            <ProfileForm userDisconnect={userDisconnect} user={user} />
          )}
        />

        <Route
          path='/addrecipe'
          exact
          strict
          render={() => <AddRecipeForm />}
        />

        <Route path='/favoris' exact strict render={() => <Favoris />} />

        <Route path='/recette/:id' exact strict render={() => <Recipe />} />

        <Footer onShowModal={showConnexionModal} user={user} />
      </BrowserRouter>
    </div>
  )
}

export default App
