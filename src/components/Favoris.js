import Card from './Card'
import image1 from '../assets/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg'
import image2 from '../assets/images/caroline-attwood-bpPTlXWTOvg-unsplash.jpg'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { useEffect, useState } from 'react'

const Favoris = ({imageUrl}) => {
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
        console.log(recipes)
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
      <div className="ui star rating" data-rating="3"></div>
      <h2 style={{ margin: ' 20px 0', color: '#666' }}>
        Mes favoris
      </h2>
      <br />
      <div className='ui three stackable cards ' style={{ paddingBottom: '70px' }}>




        <Card image={imageUrl} name={data[0].name}/>
        <Card image={image2} />
        <Card image={image1} />
      </div>
    </div>
  )
}

export default Favoris
