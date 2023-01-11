import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contanct';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Team from './Components/Team/Team';
import HomeWrapper from './pages/HomeWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomeWrapper />}>
            <Route path='menu' element={<Menu />} /> 
            <Route path='team' element={<Team />} /> 
            <Route path='home' element={<Home />} />
            <Route path='events' element={<Events />} />
            <Route path='contact' element={<Contact />} />
          </Route>   
      </Routes>
    </div>
  );
}

export default App;
