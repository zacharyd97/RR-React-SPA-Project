import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Github from './components/Github';


function App() {


  
  return (
    <div className="App">
      <Router>
        <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link >
              <Link to="/AboutMe">About Me</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Github">Github</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Projects">Projects</Link>
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>

      <div className='display'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Github' element={<Github/>} />
          <Route path='/AboutMe' element={<AboutMe/>} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      </div>
      </Router>







    </div>
  );
}

export default App;
