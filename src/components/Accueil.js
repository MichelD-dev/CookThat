import Card from './Card'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import { useEffect, useState } from 'react'

const Accueil = ({ user }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'))
        const cards = querySnapshot.docs.map(doc => ({
          // Tableau de tous les objets 'recette'
          id: doc.id,
          ...doc.data(),
        }))
        setData(cards)
      } catch (e) {
        setError(e.message)
      }
    }
    getRecipe()
  }, [])

  return (
    <div className='ui container'>
      <h2 style={{ margin: ' 20px 0', color: '#666' }}>
        Nos dernières recettes
      </h2>
      <br />
      <div className='ui three stackable cards '>
        {data.map((card, id) => (
          <Card
            key={data[id].id}
            recipeId={data[id].id}
            user={user}
            name={data[id].name}
            image={data[id].photo}
            id={id}
            difficulty={data[id].difficulty}
            tps={data[id].cookingTime}
            ratings={data[id].ratings.ratings}
            nbrVotes={data[id].ratings.nbrVotes}
          />
        ))}
      </div>
    </div>
  )
}

export default Accueil
