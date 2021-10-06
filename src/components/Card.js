const Card = ({ image }) => {
  return (
    <div className='ui card'>
   
      <div className='image'>
        <img src={image} alt='food' />

        {/* <div className='ui star rating' data-rating='4'></div> */}
      </div>
    </div>
  )
}

export default Card
