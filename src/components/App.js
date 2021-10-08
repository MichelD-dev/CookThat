import { BrowserRouter, Route, useHistory } from 'react-router-dom'
import InscriptionForm from './InscriptionForm'
import ConnexionForm from './ConnexionForm'
import ProfileForm from './ProfileForm'
import AddRecipeForm from './AddRecipeForm'
import Favoris from './Favoris'
import Footer from './Footer'
import Accueil from './Accueil'
import { useState } from 'react'

function App() {
  const [modalConnexionIsShown, setModalConnexionIsShown] = useState(false)
  const [modalInscriptionIsShown, setModalInscriptionIsShown] = useState(false)
  const [user, setUser] = useState()

  console.log(user)

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

  let history = useHistory()

  const userDisconnect = e => {
    e.prevetDefault()
    setUser(null)
    history.push('/')
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
        <Route path='/' exact strict component={Accueil} />

        <Route
          path='/profile'
          exact
          strict
          render={() => <ProfileForm userDisconnect={userDisconnect} />}
        />

        <Route
          path='/addrecipe'
          exact
          strict
          render={() => <AddRecipeForm />}
        />

        <Route path='/favoris' exact strict render={() => <Favoris />} />

        <Footer onShowModal={showConnexionModal} user={user} />
      </BrowserRouter>
    </div>
  )
}

export default App
