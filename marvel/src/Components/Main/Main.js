import './Main.css'
import {Cards} from '../Cards/Cards.js'
import {Seek} from '../Search/Search.js'
import {My} from '../My_Team/MyTeam.js'

export const Main = () => {
  return  <>
  <div><Seek/></div>
  <div className='bulb container-fluid d-flex justify-content-around'>
  <div className="hub d-flex flex-wrap justify-content-around">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
  </div>
  <My/>
  </div>
  </>
}