import './styles/App.css';
import Header from './components/header/Header';
import Body from './components/main/Body';
import CatInterlayer from './components/cat/Cat';
import Cats from './components/cat/Cats';
import {Routes,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route strict path='/' element={<Body />}/>
        <Route path = 'cats' element={<Cats />}>
          <Route index
                  element={
                      <main className='IndexElem' style={{ padding: "1rem"}}>
                          <h1>Select a cat</h1>
                      </main>
                  }
              />
          <Route path=':id' element={<CatInterlayer />}/>
        </Route>
          
      </Routes>
      
    </div>
  );
}

export default App;
