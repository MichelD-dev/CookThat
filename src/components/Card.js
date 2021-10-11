import { useHistory } from 'react-router'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
import { useState } from 'react'
import { Rating, Card as Cart, Image } from 'semantic-ui-react'

const Card = ({
  user,
  name,
  image,
  recipeId,
  id,
  difficulty,
  tps,
  ratings,
  nbrVotes,
}) => {
  const [rating, setRating] = useState(0)
  const [votes, setVotes] = useState(0)
  const [favori, setFavori] = useState(0)
  const [error, setError] = useState('')
  const history = useHistory()

  const HandleRate = (e, { rating }) => {
    e.preventDefault()
    setRating(rating)
    setVotes(1)
  }

  const HandleFavori = (e, { rating }) => {
    e.preventDefault()
    setFavori(rating)
  }

  const handleSelect = async e => {
    e.preventDefault()
    if (!rating) {
      return
    }
    try {
      await updateDoc(doc(db, 'recipes', recipeId), {
        'ratings.ratings': (ratings * nbrVotes + rating) / (nbrVotes + 1),
        'ratings.nbrVotes': nbrVotes + votes,
      })
      await updateDoc(doc(db, 'users', 'userId'), { //TODO useContext User
        favoris: '',
       
      })
      history.push(`/recette/${id}`)
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <Cart
      style={{
        boxShadow: '1px 2px 5px grey',
        marginBottom: '20px',
        position: 'relative',
      }}
    >
      <div
        style={{
          overflow: 'hidden',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image fluid src={image} onClick={handleSelect} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '15px',
          left: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '10px 12px',
          borderRadius: '0 7px 7px 0',
          color: '#444',
          fontWeight: 'bold',
          userSelect: 'none',
        }}
      >
        <h3>{name}</h3>
        {/* <h3>Poulet à la moutarde</h3> */}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '7px 20px',
          borderRadius: '0 7px 7px 0',
          color: '#C55252',
          userSelect: 'none',
        }}
      >
        {difficulty}
        {/* difficile */}
      </div>
      <Rating
        icon='heart'
        maxRating={1}
        size='huge'
        onRate={HandleFavori}
        rating={favori}
        disabled={!user}
        style={{
          position: 'absolute',
          // opacity: '.9',
          top: '22px',
          right: '17px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '65px',
          right: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '5px 12px',
          borderRadius: '7px 0 0 7px',
          color: '#333',
          userSelect: 'none',
        }}
      >
        {/* 20 mns */}
        {tps} min
      </div>
      <Rating
        icon='star'
        maxRating={5}
        onRate={HandleRate}
        rating={rating || 0}
        disabled={!user}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '10px',
          borderRadius: '7px 0 0 7px', //FIXME l'affichage ne correspond pas ???
        }}
      />
    </Cart>
  )
}

export default Card
