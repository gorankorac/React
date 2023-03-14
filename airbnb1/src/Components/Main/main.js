import './main.css'
import image from './Group 77.png'

export const Main = () => {
  return (
    <main className='main'>
      <img className='catch' src={image} alt = 'group'></img>
      <h1 className='headings'>Online Experiences</h1>
      <p className='text'>Join unique interactive activities led by one of a kind hosts all without leaving home.</p>
    </main>
  )
}