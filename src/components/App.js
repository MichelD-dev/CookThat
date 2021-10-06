import { BrowserRouter, Link, Route } from 'react-router-dom'
import InscriptionForm from './InscriptionForm'
import ConnexionForm from './ConnexionForm'
import ProfileForm from './ProfileForm'
import AddRecipeForm from './AddRecipeForm'
import Footer from './Footer'
import Accueil from './Accueil'

function App() {
  return (
    <div>
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
      <Footer />
    </div>
  )
}

export default App
