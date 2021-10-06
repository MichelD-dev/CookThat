const Card = ({ image }) => {
  return (
    <div
      className='ui card'
      style={{
        boxShadow: '1px 2px 5px grey',
        marginBottom: '20px',
        position: 'relative',
      }}
    >
      <div className='image'>
        <img
          src={image}
          alt='food'
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        />

        <div className='ui extra content star rating' data-rating='4' style={{position: 'absolute' , bottom: '10px', right: '0', backgroundColor: 'white', opacity: '.5', padding: '15px' }}>Rating</div>
      </div>
    </div>
  )
}

export default Card
