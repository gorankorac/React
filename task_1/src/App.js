
import './App.css';
import {useEffect, useState} from 'react'
import {Nav} from './Components/Nav/nav.js'
import { Footer } from './Components/Footer/footer.js';
import { Main } from './Components/Main/main.js';
import Fetch from './Components/Fetch/Fetch.js';


const getData = async () => {
  const res = await fetch('https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js')
  const {results }= await res.json();
  const arr = results.map(obj => ({name: obj.name.first, email: obj.email, image: obj.picture.thumbnail
  })) 
  return arr;
}



function App() {
 const [users, setusers] = useState([]);
 
 

useEffect( () => {

  // getData().then(data => {
  //   setusers(data)
  // });

const version2 = async () => {
 const newArr= await getData();
 setusers(newArr)
}
version2()


}, [])

  return (
    <div className="App">
     
      <Nav ></Nav>
      <Main>
      </Main>
      <Fetch data={users}/>

      <Footer></Footer>
    </div>
  );
}

export default App;
