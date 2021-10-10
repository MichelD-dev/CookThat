import { Rating, Card as Cart, Image, Label } from 'semantic-ui-react'

const Card = ({ name, image, id, difficulty, tps }) => {
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
          // objectFit: 'contain',
        }}
      >
        {image ? (
          <Image fluid src={image} as='a' href={`/recette/${id}`} />
        ) : (
          <Image
            as='a'
            href={`/recette/${id}`} //FIXME ne link pas vers la page recette
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
        defaultRating={1}
        maxRating={1}
        size='huge'
        style={{
          position: 'absolute',
          opacity: '.9',
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
        defaultRating={3}
        maxRating={5}
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
