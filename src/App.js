
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navigation from './Pages/Navigation'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='black-nav'>
          <div className='logoName'>Jaeminst Shop</div>
          <NavLink className={({isActive}) => "nav-link" + (isActive? "a" : "")} to='/'>Home</NavLink>
          <NavLink className={({isActive}) => "nav-link" + (isActive? "a" : "")} to='/about'>About</NavLink>
          <NavLink className={({isActive}) => "nav-link" + (isActive? "a" : "")} to='/contact'>Contact</NavLink>
          <NavLink className={({isActive}) => "nav-link" + (isActive? "a" : "")} to='/Navigation'>Navigation</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact text='props text'/>} />
          <Route path='/Navigation' element={<Navigation text='props text'/>} />
          <Route path='/Navigation/:id' element={<Navigation text='props text'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
