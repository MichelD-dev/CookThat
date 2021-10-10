import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../firebase/firebase'
import { useDropzone } from 'react-dropzone'
import { format } from 'date-format-parse'
import {
  Button,
  Container,
  Form,
  Select,
  TextArea,
  Label,
  Segment,
  Image,
} from 'semantic-ui-react'
// import Ingredients from './Ingredients'

const AddRecipeForm = ({ imgUrl }) => {
  const history = useHistory()
  const [file, setFile] = useState(null)
  const [etapesList, setEtapesList] = useState([{ description: '' }])
  const [error, setError] = useState('')
  const [ingredientsList, setIngredientsList] = useState([
    { name: '', quantity: '', unit: '' },
  ])
  const [recettes, setRecettes] = useState({
    name: '',
    photo: '',
    difficulty: '',
    prepTime: '',
    restTime: '',
    cookingTime: '',
    persons: '',
    inline: '',
    date: format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
  })
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const handleFile = async e => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

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

    try {
      if (!file)
        return {
          /*FIXME  Pas d'envoi si pas d'image...*/
        }

      // on crée une référence vers le fichier dans firebase
      const imgRef = ref(storage, file.name)

      // On upload l'image
      const snapshot = await uploadBytes(imgRef, file)

      // On récupère le lien (l'url de l'image)
      const url = await getDownloadURL(snapshot.ref)

      const recette = await addDoc(collection(db, 'recipes'), {
        ...recettes,
        ingredient: ingredientsList,
        etape: etapesList,
        photo: url,
      })
      imgUrl(url)
      console.log(recettes)
      history.push('/')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <>
      <Container>
        <Form
          onSubmit={handleSubmit}
          style={{ padding: '40px 0 100px', color: '#666' }}
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
          <Segment >
            <div // FIXME padding Segment non modifiable
              {...getRootProps({ className: 'dropzone' })}
              style={{
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}
            >
              <input {...getInputProps()} onChange={handleFile}/>
              {file ? (
                <Image fluid rounded >
                  <img
                    src={`${URL.createObjectURL(file)}`}
                    alt='recette'
                    style={{
                      // objectFit: 'cover',
                      // height: '100%',
                    }}
                  />
                </Image>
              ) : (
                <h4
                  style={{
                    color: '#666',
                    textAlign: 'center',
                    marginTop: '0px',
                  }}
                >
                  <i className='images outline huge disabled icon ' />
                </h4>
              )}
            </div>
          </Segment>
          <div className='ui fluid vertical buttons'>
            <h5>Difficulté</h5>
            <Container>
              <Button
                onClick={e => {
                  e.preventDefault()
                  setRecettes({ ...recettes, difficulty: 'facile' })
                }}
              >
                Facile
              </Button>
              <br />
              <Button
                onClick={e => {
                  e.preventDefault()
                  setRecettes({ ...recettes, difficulty: 'moyen' })
                }}
              >
                Moyen
              </Button>
              <br />
              <Button
                onClick={e => {
                  e.preventDefault()
                  setRecettes({ ...recettes, difficulty: 'difficile' })
                }}
              >
                Difficile
              </Button>
            </Container>
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

              <Form.Group
                inline
                // style={{
                //   display: 'flex',
                //   justifyContent: 'space-evenly',
                // }}
              >
                {/* <div className='fields' style={{ marginBottom: '20px' }}> */}
                <Form.Group vertical> {/*//FIXME*/}
                  {/* <div className=' field'> */}
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
                  {/* </div> */}
                </Form.Group>
                <Form.Group vertical>
                  {' '}
                  {/*FIXME */}
                  {/* <div className=' field'> */}
                  <label htmlFor='unit'>Mesure</label>
                  <Select
                    placeholder='unité de mesure'
                    onChange={e =>
                      retoucherIngredient(
                        { ...ingredient, unit: e.currentTarget.value },
                        i
                      )
                    }
                    value={ingredient.unit}
                    options={[
                      {
                        key: 'c.a.s',
                        value: 'c.a.s.',
                        text: 'cuillères à soupe',
                      },
                      {
                        key: 'c.a.c',
                        value: 'c.a.c',
                        text: 'cuillères à café',
                      },
                      {
                        key: 'cl',
                        value: 'centilitres',
                        text: 'centilitres',
                      },
                      { key: 'g', value: 'grammes', text: 'grammes' },
                      { key: 'portions', value: '', text: 'portions' },
                    ]}
                  ></Select>
                  {/* </div> */}
                  {/* </div> */}
                </Form.Group>
              </Form.Group>
              <Button
                fluid
                color='red'
                onClick={e => {
                  e.preventDefault()
                  supprimerIngredient(i)
                }}
              >
                Supprimer
              </Button>
              <br />
            </div>
          ))}

          <Button fluid onClick={ajouterIngredient}>
            Ajouter un ingrédient
          </Button>

          <h5>Etapes</h5>
          {etapesList.map((etape, i) => (
            <div className='ui form container segment' key={`etape-${i}`}>
              <Form.Group
                inline
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Form.Field>
                  <Label circular color='olive' size='large'>
                    {i + 1}
                  </Label>
                </Form.Field>
                <Form.Field>
                  <TextArea
                    rows={5}
                    cols={30}
                    onChange={e =>
                      retoucherEtape(
                        { ...etape, description: e.currentTarget.value },
                        i
                      )
                    }
                    value={etape.description}
                  />
                </Form.Field>
              </Form.Group>

              <Button
                fluid
                color='red'
                onClick={e => {
                  e.preventDefault()
                  supprimerEtape(i)
                }}
              >
                Supprimer
              </Button>
              <br />
            </div>
          ))}
          <br />
          <Button fluid onClick={ajouterEtape}>
            Ajouter une étape
          </Button>
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
          {error && <p>{error}</p>}
          <Button
            fluid
            color='olive'
            size='large'
            style={{ marginTop: '40px' }}
          >
            Sauvegarder
          </Button>
        </Form>
      </Container>
    </>
  )
}
export default AddRecipeForm
