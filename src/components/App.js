import { BrowserRouter, Link, Route } from 'react-router-dom'
import InscriptionForm from './InscriptionForm'
import ConnexionForm from './ConnexionForm'
import ProfileForm from './ProfileForm'
import AddRecipeForm from './AddRecipeForm'
import Footer from './Footer'
import Accueil from './Accueil'
import { useState } from 'react'

function App() {
  const [modalConnexionIsShown, setModalConnexionIsShown] = useState(true)
  const [modalInscriptionIsShown, setModalInscriptionIsShown] = useState(false)

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
          hideConnexionModal={hideConnexionModal}
          showInscriptionModal={showInscriptionModal}
          hideInscriptionModal={hideInscriptionModal}
        />
      )}
      {modalInscriptionIsShown && (
        <InscriptionForm hideInscriptionModal={hideInscriptionModal} />
      )}
      <BrowserRouter>
        <div className='App'>
          <header className='App-header'>
            <ul>
              <li>
                <Link to='/'>Accueil</Link>
              </li>
              <li>
                <Link to='/inscription'>Inscription</Link>
              </li>
              <li>
                <Link to='/connexion'>Connexion</Link>
              </li>
              <li>
                <Link to='/profile'>Mon profil</Link>
              </li>
              <li>
                <Link to='/addrecipe'>Ajouter une recette</Link>
              </li>
            </ul>
            <Route path='/' exact strict>
              <Accueil />
            </Route>
            <Route path='/inscription' exact strict>
              <InscriptionForm />
            </Route>
            <Route path='/connexion' exact strict>
              <ConnexionForm />
            </Route>
            <Route path='/profile' exact strict>
              <ProfileForm />
            </Route>
            <Route path='/addrecipe' exact strict>
              <AddRecipeForm />
            </Route>
          </header>
        </div>
      </BrowserRouter>
      <Footer onShowModal={showConnexionModal} />
    </div>
  )
}

export default App
