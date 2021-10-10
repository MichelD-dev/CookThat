import { useHistory } from 'react-router'
import { useState } from 'react/cjs/react.development'
import { Rating, Card as Cart, Image, Label } from 'semantic-ui-react'

const Card = ({ name, image, id, difficulty, tps }) => {
  const [rating, setRating] = useState(0)
  const [favori, setFavori] = useState(0)
  const history = useHistory()

  const HandleRate = (e, { rating }) => {
    e.preventDefault()
    setRating(rating)
  }
  console.log(rating)
  const HandleFavori = (e, { rating }) => {
    e.preventDefault()
    setFavori(rating)
  }
  console.log(favori)
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
        {image ? (
          // <Image fluid src={image} as='a' href={`/recette/${id}`} />
          <Image
            fluid
            src={image}
            // as='button'
            onClick={() => history.push(`/recette/${id}`)}
          />
        ) : (
          <Image
            as='button'
            onClick={() => history.push('/favoris')} //FIXME recharge la page
            centered
          >
            <Label content='Image introuvable' icon='warning' size='medium' />
          </Image>
        )}
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
        {/* <h3>{name}</h3> */}
        <h3>Poulet à la moutarde</h3>
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
        {/* {difficulty} */}
        difficile
      </div>
      <Rating
        icon='heart'
        maxRating={1}
        size='huge'
        onRate={HandleFavori}
        rating={favori}
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
        20 mns
        {/* {tps} */}
      </div>
      <Rating
        icon='star'
        maxRating={5}
        onRate={HandleRate}
        rating={rating}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          padding: '10px',
          borderRadius: '7px 0 0 7px',
        }}
      />
    </Cart>
  )
}

export default Card
