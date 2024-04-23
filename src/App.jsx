import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Services from './components/services/services';
import Projects from './components/projects/projects';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import { useState } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [toggleFlag, setToggleFlag]= useState('false');
  return (
    <div className="app">
      {/* <Nav setCurrentPage= {setCurrentPage}/>
      {currentPage==='' && <><Header/><About /><Contact /></>}
      {currentPage==='projects' && <><Projects /></>}
      {currentPage==='experience' && <><Experience /></>}
      <Footer /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Resume' element={<Home />} />
        </Routes>
        <NavBar />
      </Router>
     
      
    </div>
  );
}

export default App;
