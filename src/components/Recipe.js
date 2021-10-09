import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

import { db } from '../firebase/firebase'

const Recipe = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const { id } = useParams()

  useEffect(() => {
    const getRecette = async () => {
      const collectionRef = collection(db, 'recipes')
      try {
        const querySnaphot = await getDocs(collectionRef)

        const recipes = querySnaphot.docs.map(doc => ({
          // Tableau de tous les objets 'recette'
          id: doc.id,
          ...doc.data(),
        }))
        setData(recipes)
        console.log(recipes)
      } catch (e) {
        setError(e.message)
      }
    }

    getRecette()
  }, [])

  if (!data[id]) {
    return <Loader indeterminate active size='big' content='Chargement...' />
  }

  return (
    <div className='ui container'>
      {/* { <img
          src={}
          alt='image'
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        /> } */}
      <div className='ui star rating' data-rating='3'></div>
      <h1>{data[id].name}</h1>
      <span>{data[id].prepTime} mns</span> - <span>{data[id].difficulty}</span>
      <h3>Ingrédients</h3>
      <ul>
        {data[id].ingredient.map(ingredient => (
          <li>{ingredient.name}</li>
        ))}
      </ul>
      <h3>Préparation</h3>
      <div>
        <p>
          Temps total:{' '}
          {Number(data[id].prepTime) +
            Number(data[id].restTime) +
            Number(data[id].cookingTime)}{' '}
          mns
        </p>
        <p>Préparation: {data[id].prepTime + ' mns' || null}</p>
        <p>Repos: {data[id].restTime + ' mns' || null}</p>
        <p>Cuisson: {data[id].cookingTime + ' mns' || null}</p>
      </div>
      <ul>
        {data[id].etape.map(etape => (
          <li>{etape.description}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipe
