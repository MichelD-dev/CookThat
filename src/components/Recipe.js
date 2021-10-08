import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import { db } from '../firebase/firebase'

const Recipe = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getRecette = async () => {
      const collectionRef = collection(db, 'recipes')
      const querySnaphot = await getDocs(collectionRef)

      // On on obtient un tableaux de tout les objet recette
      const recipes = querySnaphot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))

      setData(recipes)
    }
    console.log(data)
    getRecette()
  }, [])

  return (
    <div>
      {/* {data.map(recipe => (
        <p>{recipe.id}</p>
    ))} */}
      {data[0].id}
    </div>
  )
}

// Un composant :
// - Une fonction, qui accépte des props et des children
// - Elle doit commencer par une majuscule
// - Elle doit retourner du JSX

export default Recipe
