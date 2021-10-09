import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../firebase/firebase'

const Recipe = props => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  const { id } = useParams()

  useEffect(() => {
    const getRecette = async () => {
      const collectionRef = collection(db, 'recipes')
      try {
        const querySnaphot = await getDocs(collectionRef)

        // On obtient un tableau de tous les objets recette
        const recipes = querySnaphot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))

        setData(recipes)
      } catch (e) {
        setError(e.message)
      }
    }

    getRecette()
  }, [])

  if (!data[id]) {
    return <p>Chargement ...</p>
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
        <p>
          Préparation: {data[id].prepTime ? data[id].prepTime + ' mns' : null}
        </p>
        <p>Repos: {data[id].restTime ? data[id].restTime + ' mns' : null}</p>
        <p>
          Cuisson: {data[id].cookingTime ? data[id].cookingTime + ' mns' : null}
        </p>
      </div>
      <ul>
        {data[id].etape.map(etape => (
          <li>{etape.description}</li>
        ))}
      </ul>
    </div>
  )
}

// Un composant :
// - Une fonction, qui accépte des props et des children
// - Elle doit commencer par une majuscule
// - Elle doit retourner du JSX

export default Recipe
