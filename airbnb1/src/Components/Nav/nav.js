import './nav.css'
import photo from './icons8-airbnb-144.png'

export const Page = () => {
  return (
    <nav>
      <img className='nav-img' src={photo} alt='logo'/>
      <h2 className='nav-text'>AirBnB</h2>
      <h3 className='nav-title'></h3>
    </nav>
  )
   }