import './styles/App.css';
import Header from './components/Header';
import Body from './components/Body'
import Cat from './components/Cat';
import Cats from './components/Cats';
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
          <Route path=':id'element={<Cat />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
