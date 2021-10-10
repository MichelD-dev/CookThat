import Card from './Card'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useEffect, useState } from 'react'

const Favoris = ({ imageUrl }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

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
      } catch (e) {
        setError(e.message)
      }
    }
    getRecette()
  }, [])

  // if (!data[id]) {
  //   return <Loader indeterminate active size='big' content='Chargement...' />
  // }

  return (
    <div className='ui container'>
      <h2 style={{ margin: ' 20px 0', color: '#666' }}>Mes favoris</h2>
      <br />
      <div className='ui three stackable cards '>
        {data.map((card, id) => (
          <Card
            key={data[id].id}
            name={data[id].name}
            image={data[id].photo}
            id={id}
            difficulty={data[id].difficulty}
            tps={data[id].cookingTime}
          />
        ))}
      </div>
    </div>
  )
}

export default Favoris
