
import './App.css';
import {Nav} from './Components/Header/Header.js'
import {Main} from './Components/Main/Main.js'
import { BigFoot } from './Components/Footer/Footer.js';
import { GetData } from './Components/Data/Data.js';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <BigFoot/>
      <GetData/>
    </div>
  );
}

export default App;
