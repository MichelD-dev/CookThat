import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'

import { db } from '../firebase/firebase'

const Recipe = () => {
  const [data, setData] = useState()

  const getRecette = async () => {
    const collectionRef = collection(db, 'recipes')
    const querySnaphot = await getDocs(collectionRef)

    // On on obtient un tableaux de tout les objet recette
    const recipes = querySnaphot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    // console.log(recipes)
    setData(recipes)
    console.log(data)
  }
  getRecette()

  return <div>{data}</div>
}

export default Recipe
