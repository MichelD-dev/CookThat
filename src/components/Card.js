import { Link } from 'react-router-dom'

const Card = ({ image, id }) => {
  return (
    <div
      className='ui card'
      style={{
        boxShadow: '1px 2px 5px grey',
        marginBottom: '20px',
        position: 'relative',
      }}
    >
      <Link to={`/recette/${id}`} className='ui image'>
        <img
          src={image}
          alt='food'
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        />

        <div
          className='ui star rating'
          data-rating='4'
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '0',
            backgroundColor: 'white',
            opacity: '.5',
            padding: '15px',
          }}
        ></div>
      </Link>
    </div>
  )
}

export default Card
