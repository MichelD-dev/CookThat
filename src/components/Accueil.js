import Card from './Card'
import image1 from '../assets/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg'
import image2 from '../assets/images/caroline-attwood-bpPTlXWTOvg-unsplash.jpg'
import image3 from '../assets/images/jongsun-lee-JnFGgVaFpmE-unsplash.jpg'

const Accueil = () => {
  return (
    <div className='ui container'>
      <div className="ui star rating" data-rating="3"></div>
      <h2 style={{ margin: ' 20px 0', color: '#666' }}>
        Nos dernières recettes
      </h2>
      <br />
      <div className='ui three stackable cards ' style={{ paddingBottom: '70px' }}>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image1} />
        <Card image={image3} />
      </div>
    </div>
  )
}

export default Accueil
