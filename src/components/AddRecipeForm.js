import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
// import Ingredients from './Ingredients'

const AddRecipeForm = () => {
  const [ingredient, setIngredient] = useState('')
  const [quantity, setQuantity] = useState()
  const [unit, setUnit] = useState()
  const [ingredientsList, setIngredientsList] = useState([
    { name: '', quantity: 0, unit: 'c.a.s' },
  ])

  const handleAddIngredients = e => {
    e.preventDefault()

    setIngredientsList([
      ...ingredientsList,
      { name: '', quantity: 0, unit: 'c.a.s' },
    ])
  }

  const retoucherIngredient = (newIngredient, index) => {
    setIngredientsList(
      ingredientsList.map((ingredient, i) => {
        if (i !== index) return ingredient

        return { ...ingredient, ...newIngredient }
      })
    )
  }

  const supprimerIngredient = (index) => {
    setIngredientsList(ingredientsList.filter((ingredient, i) => i !== index))
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
        {/* {showIngredients && <Ingredients data={ingredientsList} />} */}
        {ingredientsList.map((ingredient, index) => (
          <div
            className='ui form container segment'
            key={`ingredient-${index}`}
          >
            <div className='field'>
              <label htmlFor='ingredient'>Ingrédient</label>
              <input
                id='ingredient'
                type='text'
                name='ingredient'
                onChange={e =>
                  retoucherIngredient(
                    { ...ingredient, name: e.currentTarget.value },
                    index
                  )
                }
                value={ingredient.name}
              />
            </div>

            <div className='two fields'>
              <div className='field'>
                <div className='field'>
                  <label htmlFor='quantity'>Quantité</label>
                  <input
                    type='text'
                    id='quantity'
                    onChange={e =>
                      retoucherIngredient(
                        { ...ingredient, quantity: e.currentTarget.value },
                        index
                      )
                    }
                    value={ingredient.quantity}
                  />
                </div>
              </div>
              <div className='field'>
                <label htmlFor='unit'>Mesure</label>
                <select
                  id='unit'
                  className='ui fluid search dropdown'
                  onChange={e =>
                    retoucherIngredient(
                      { ...ingredient, unit: e.currentTarget.value },
                      index
                    )
                  }
                  value={ingredient.unit}
                >
                  <option value='c.a.s'>c.a.s</option>
                  <option value='c.a.c'>c.a.c</option>
                  <option value='cl'>centilitres</option>
                  <option value='g'>grammes</option>
                  <option value='portions'>portions</option>
                </select>
              </div>
            </div>
            <button className='fluid ui red button' onClick={supprimerIngredient}>Supprimer</button>
            <br />
          </div>
        ))}

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
