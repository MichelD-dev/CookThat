import Card from './Card'
import image1 from '../assets/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg'
import image2 from '../assets/images/caroline-attwood-bpPTlXWTOvg-unsplash.jpg'
import image3 from '../assets/images/jongsun-lee-JnFGgVaFpmE-unsplash.jpg'

const Accueil = () => {
  return (
    <div class='ui three stackable cards container' style={{ paddingBottom: '70px' }}>
      <h2 style={{margin :' 20px 0', color: '#666'}}>Nos dernières recettes</h2>
      <Card image={image1} />
      <Card image={image2} />
      <Card image={image3} />
    </div>
  )
}

export default Accueil
