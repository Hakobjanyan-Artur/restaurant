import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import HomeWrapper from './pages/HomeWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path='/' element={<HomeWrapper />}/>
            <Route path='home' element={<Home />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
