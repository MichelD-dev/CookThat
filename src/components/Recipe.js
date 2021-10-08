import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import { db } from '../firebase/firebase'

const Recipe = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

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

  if (!data[0]) {
    return <p>Chargement ...</p>
  }

  // console.log(data)
  return (
    <div>
      {/* { <img
          src={}
          alt='image'
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        /> } */}
      <h1>{data[0].name}</h1>
      <span>{data[0].prepTime} mns</span> - <span>{data[0].difficulty}</span>
      <h3>Ingrédients</h3>
      <ul>
        {data[0].ingredient.map(ingredient => (
          <li>{ingredient.name}</li>
        ))}
      </ul>
      <h3>Préparation</h3>
      <div>
        <p>
          Temps total:{' '}
          {Number(data[0].prepTime) +
            Number(data[0].restTime) +
            Number(data[0].cookingTime)}{' '}
          mns
        </p>
        <p>Préparation: {data[0].prepTime} mns</p>
        <p>Repos: {data[0].restTime}</p>
        <p>Cuisson: {data[0].cookingTime} mns</p>
      </div>
      <ul>
        {data[0].etape.map(etape => (
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
