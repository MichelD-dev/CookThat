import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
// import Ingredients from './Ingredients'

const AddRecipeForm = () => {
  const [etapesList, setEtapesList] = useState([{ description: '' }])
  const [ingredientsList, setIngredientsList] = useState([
    { name: '', quantity: 0, unit: 'c.a.s' },
  ])
  const [recettes, setRecettes] = useState({
    name: '',
    photo: '',
    difficulty: '',
    prepTime: 0,
    restTime: 0,
    cookingTime: 0,
    persons: 0,
    ingredient: {...ingredientsList},
    etape: {...etapesList},
    inline: false,
  })
  console.log(recettes.ingredient)
  const ajouterIngredient = e => {
    e.preventDefault()

    setIngredientsList([
      ...ingredientsList,
      { name: '', quantity: 0, unit: 'c.a.s' },
    ])
  }

  const ajouterEtape = e => {
    e.preventDefault()

    setEtapesList([...etapesList, { description: '' }])
  }

  const retoucherIngredient = (newIngredient, indexToModify) => {
    setIngredientsList(
      ingredientsList.map((ingredient, index) => {
        if (index !== indexToModify) return ingredient

        return { ...ingredient, ...newIngredient }
      })
    )
  }

  const retoucherEtape = (newEtape, indexToModify) => {
    setEtapesList(
      etapesList.map((etape, index) => {
        if (index !== indexToModify) return etape

        return { ...etape, ...newEtape }
      })
    )
  }

  const supprimerIngredient = indexToRemove => {
    setIngredientsList(
      ingredientsList.filter((ingredient, index) => index !== indexToRemove)
    )
  }

  const supprimerEtape = indexToRemove => {
    setEtapesList(etapesList.filter((etape, index) => index !== indexToRemove))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    console.warn(recettes)
    const recette = await addDoc(collection(db, 'recipes'), recettes)
    console.log(recette.name)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='ui form container'
        style={{ paddingBottom: '70px' }}
      >
        <h2>Ajouter une recette</h2>
        <div className='field'>
          <label htmlFor='recipe-name'>Nom de la recette</label>
          <input
            type='text'
            id='recipe-name'
            onChange={e =>
              setRecettes({ ...recettes, name: e.currentTarget.value })
            }
            value={recettes.name}
          />
        </div>
        <h5>Photos</h5>
        <div className='ui icon input'>
          {/* <label htmlFor='image-loading'>Ajouter une photo</label> */}
          {/* <input type='text' id='image-loading' accept='image/*' /> */}
          <FontAwesomeIcon icon={faImages} />
        </div>

        <div className='ui fluid vertical buttons'>
          <h5>Difficulté</h5>
          <button
            className='ui button '
            onClick={e => setRecettes({ ...recettes, difficulty: 'facile' })}
          >
            Facile
          </button>
          <br />
          <button
            className='ui button'
            onClick={e => setRecettes({ ...recettes, difficulty: 'moyen' })}
          >
            Moyen
          </button>
          <br />
          <button
            className='ui button'
            onClick={e => setRecettes({ ...recettes, difficulty: 'difficile' })}
          >
            Difficile
          </button>
          <br />
        </div>

        <div className='field'>
          <label htmlFor='prep-time'>Temps de préparation (en minutes)</label>
          <input
            type='text'
            id='prep-time'
            onChange={e =>
              setRecettes({ ...recettes, prepTime: e.currentTarget.value })
            }
            value={recettes.prepTime}
          />
        </div>
        <div className='field'>
          <label htmlFor='rest-time'>Temps de repos (en minutes)</label>
          <input
            type='text'
            id='rest-time'
            onChange={e =>
              setRecettes({ ...recettes, restTime: e.currentTarget.value })
            }
            value={recettes.restTime}
          />
        </div>
        <div className='field'>
          <label htmlFor='cooking-time'>Temps de cuisson(en minutes)</label>
          <input
            type='text'
            id='cooking-time'
            onChange={e =>
              setRecettes({ ...recettes, cookingTime: e.currentTarget.value })
            }
            value={recettes.cookingTime}
          />
        </div>
        <div className='field'>
          <label htmlFor='people-number'>Nombre de personnes</label>
          <input
            type='text'
            id='people-number'
            onChange={e =>
              setRecettes({ ...recettes, persons: e.currentTarget.value })
            }
            value={recettes.persons}
          />
        </div>
        <h5>Ingrédients</h5>
        {ingredientsList.map((ingredient, i) => (
          <div className='ui form container segment' key={`ingredient-${i}`}>
            <div className='field'>
              <label htmlFor='ingredient'>Ingrédient</label>
              <input
                id='ingredient'
                type='text'
                name='ingredient'
                onChange={e =>
                  retoucherIngredient(
                    { ...ingredient, name: e.currentTarget.value },
                    i
                  )
                }
                value={ingredient.name}
              />
            </div>

            <div className='fields' style={{ marginBottom: '20px' }}>
              <div className=' field'>
                <label htmlFor='quantity'>Quantité</label>
                <input
                  type='text'
                  id='quantity'
                  onChange={e =>
                    retoucherIngredient(
                      { ...ingredient, quantity: e.currentTarget.value },
                      i
                    )
                  }
                  value={ingredient.quantity}
                />
              </div>
              <div className=' field'>
                <label htmlFor='unit'>Mesure</label>
                <select
                  id='unit'
                  className='ui selection dropdown'
                  onChange={e =>
                    retoucherIngredient(
                      { ...ingredient, unit: e.currentTarget.value },
                      i
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
            <button
              className='fluid ui red button'
              onClick={e => {
                e.preventDefault()
                supprimerIngredient(i)
              }}
            >
              Supprimer
            </button>
            <br />
          </div>
        ))}

        <button className='fluid ui button' onClick={ajouterIngredient}>
          Ajouter un ingrédient
        </button>

        <h5>Etapes</h5>
        {etapesList.map((etape, i) => (
          <div className='ui form container segment' key={`etape-${i}`}>
            <div
              className='fields'
              style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <div className='field'>
                <div className='ui olive circular large label'>{i + 1}</div>
              </div>

              <div className='field'>
                <textarea
                  rows='3'
                  cols='40'
                  onChange={e =>
                    retoucherEtape(
                      { ...etape, description: e.currentTarget.value },
                      i
                    )
                  }
                  value={etape.description}
                ></textarea>
                {/* <input
                  type='text'
                  onChange={e =>
                    retoucherEtape(
                      { ...etape, description: e.currentTarget.value },
                      i
                    )
                  }
                  value={etape.description}
                /> */}
              </div>
            </div>

            <button
              className='fluid ui red button'
              onClick={e => {
                e.preventDefault()
                supprimerEtape(i)
              }}
            >
              Supprimer
            </button>
            <br />
          </div>
        ))}
        <br />
        <button className='fluid ui button' onClick={ajouterEtape}>
          Ajouter une étape
        </button>
        <div className='ui segment'>
          <h5>Sauvegarder et mettre en ligne</h5>

          <div className='ui toggle checkbox'>
            <input
              type='checkbox'
              name='inline'
              checked={recettes.inline}
              value={recettes.inline}
              onChange={e =>
                setRecettes({ ...recettes, inline: !recettes.inline })
              }
            />
            <label>Mettre en ligne</label>
          </div>
        </div>
        <button className='fluid ui large olive button'>Sauvegarder</button>
      </form>
    </>
  )
}
export default AddRecipeForm



