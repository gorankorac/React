
import './App.css';
import {Page} from './Components/Nav/nav.js'
import {Main} from './Components/Main/main.js'
import {Joke} from './Components/Joker/joker.js'


function App() {
  return (
    <div className="App">
      <Page></Page>
      <Main></Main>
      <Joke set='bmw' 
            punch='lorem'
            isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[{author: '', body: '', title: ''}]}
      ></Joke>
      
    </div>
  );
}

export default App;
