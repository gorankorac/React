
import './App.css';

import {Nav} from './Components/Nav/nav.js'
import { Footer } from './Components/Footer/footer.js';
import { Main } from './Components/Main/main.js';
import  { Todos } from './Components/Todos/Todos.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Main/> */}
      <Todos/>
      <Footer/>
      
    </div>
  );
}

export default App;

{/* <Fetch data={users}/> */}