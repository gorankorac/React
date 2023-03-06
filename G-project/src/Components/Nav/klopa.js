import './nav.css'
import photo from './logo192.png'

export const Page = () => {
  return (
    <nav>
      <img className='nav-img' src={photo} alt='logo'/>
      <h2 className='nav-text'>ReactFacts</h2>
      <h3 className='nav-title'>React course Project 1</h3>
    </nav>
  )
   }