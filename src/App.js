
import './App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navigation from './Pages/Navigation'


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='BlackNav'>
          <div className='logo-name'>Jaeminst Shop</div>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link' to='/about'>About</NavLink>
          <NavLink className='nav-link' to='/contact'>Contact</NavLink>
          <NavLink className='nav-link' to='/navigation'>Navigation</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact text='props text'/>} />
          <Route path='/navigation' element={<Navigation text='props text'/>} />
          <Route path='/navigation/:id' element={<Navigation text='props text'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
