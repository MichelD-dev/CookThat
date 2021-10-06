import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Ingredients from './Ingredients'

const AddRecipeForm = () => {
  const [ingredients, setIngredients] = useState({})
  const [showIngredients, setShowIngredients] = useState(false)

  const handleAddIngredients = e => {
    e.preventDefault()
    setIngredients(prevIngredients => prevIngredients + 1)
    console.log(ingredients)
    setShowIngredients(true)
  }

  const handleDifficulty = e => {
    e.preventDefault()
  }

  return (
    <>
      <form className='ui form container'>
        <h2>Ajouter une recette</h2>
        <div className='field'>
          <label htmlFor='recipe-name'>Nom de la recette</label>
          <input type='text' id='recipe-name' />
        </div>
        <h5>Photos</h5>
        <div className='ui icon input'>
          {/* <label htmlFor='image-loading'>Ajouter une photo</label> */}
          {/* <input type='text' id='image-loading' accept='image/*' /> */}
          <FontAwesomeIcon icon={faImages} />
        </div>

        <div className='ui fluid vertical buttons'>
          <h5>Difficulté</h5>
          <button className='ui button ' onClick={handleDifficulty}>
            Facile
          </button>
          <br />
          <button className='ui button' onClick={handleDifficulty}>
            Moyen
          </button>
          <br />
          <button className='ui button' onClick={handleDifficulty}>
            Difficile
          </button>
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
        {showIngredients && <Ingredients />}
        <button className='fluid ui button' onClick={handleAddIngredients}>
          Ajouter un ingrédient
        </button>
        <br />
        <button className='fluid ui button'>Ajouter une étape</button>
        <div className='ui segment'>
          <h5>Sauvegarder et mettre en ligne</h5>

          <div class='field'>
            <div class='ui toggle checkbox'>
              <input type='checkbox' name='gift' tabindex='0' class='hidden' />
              <label>Mettre en ligne</label>
            </div>
          </div>
        </div>
        <button className='fluid ui olive button'>Sauvegarder</button>
      </form>
    </>
  )
}
export default AddRecipeForm
