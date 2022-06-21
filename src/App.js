
import styled from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navigation from './Pages/Navigation'

const AppDiv = styled.div`
  text-align: center;
`
const BlackNav = styled.div`
  background: black;
  width: 100%;
  display: flex;
  color: white;
  padding: 20px;
  font-weight: 500;
  font-size: 20px;
  box-sizing: border-box;
`

const LogoName = styled.div`
  font-size: 30px;
  width: 300px;
  margin: 15px;
`

const NavStyle = styled(NavLink)`
  color: white;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 5px;
  outline: invert;
  &:link {
    transition : 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: aquamarine;
  }
  &.active {
    color: aqua;
    position: relative;
    top: 2px;
  }
`

function App() {
  
  return (
    <AppDiv>
      <BrowserRouter>
        <BlackNav>
          <LogoName>Jaeminst Shop</LogoName>
          <NavStyle to='/'>Home</NavStyle>
          <NavStyle to='/about'>About</NavStyle>
          <NavStyle to='/contact'>Contact</NavStyle>
          <NavStyle to='/navigation'>Navigation</NavStyle>
        </BlackNav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact text='props text'/>} />
          <Route path='/navigation' element={<Navigation text='props text'/>} />
          <Route path='/navigation/:id' element={<Navigation text='props text'/>} />
        </Routes>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
