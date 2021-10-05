import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

const AddRecipeForm = () => {
  return (
    <>
      <form className='ui form container'>
        <h2>Ajouter une recette</h2>
        <div className='field'>
          <label htmlFor='recipe-name'>Nom de la recette</label>
          <input type='text' id='recipe-name' />
        </div>
        <h5>Photos</h5>
        <div className="ui icon input">
          {/* <label htmlFor='image-loading'>Ajouter une photo</label> */}
          {/* <input type='text' id='image-loading' accept='image/*' /> */}
          <FontAwesomeIcon icon={faImages} />
        </div>

        <div class='ui fluid vertical buttons'>
          <h5>Difficulté</h5>
          <button className='ui button'>Facile</button>
          <br />
          <button className='ui button'>Moyen</button>
          <br />
          <button className='ui button'>Difficile</button>
          <br />
        </div>

        <div className='field'>
          <label htmlFor='prep-time'>Temps de préparation (en minutes)</label>
          <input type='text' id='prep-time' />
        </div>
        <div className='field'>
          <label htmlFor='rest-time'>Temps de repos (en minutes)</label>
          <input type='text' id='rest-time' />
        </div>
        <div className='field'>
          <label htmlFor='cooking-time'>Temps de cuisson(en minutes)</label>
          <input type='text' id='cooking-time' />
        </div>
        <div className='field'>
          <label htmlFor='people-number'>Nombre de personnes</label>
          <input type='text' id='people-number' />
        </div>
        {/* <Ingredients /> */}
        {/* <Cooking steps /> */}
        <button className='fluid ui button'>Ajouter un ingrédient</button>
        <br/>
        <button className='fluid ui button'>Ajouter une étape</button>
        <h5>Sauvegarder et mettre en ligne</h5>

        <div class='field'>
          <div class='ui toggle checkbox'>
            <input type='checkbox' name='gift' tabindex='0' class='hidden' />
            <label>Mettre en ligne</label>
          </div>
        </div>
        <button className='fluid ui green button'>Sauvegarder</button>
      </form>
    </>
  )
}
export default AddRecipeForm
