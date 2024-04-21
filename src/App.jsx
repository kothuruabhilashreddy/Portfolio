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

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import { useState } from 'react';
function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [toggleFlag, setToggleFlag]= useState('false');
  return (
    <div className="App">
      {/* <Nav setCurrentPage= {setCurrentPage}/>
      {currentPage==='' && <><Header/><About /><Contact /></>}
      {currentPage==='projects' && <><Projects /></>}
      {currentPage==='experience' && <><Experience /></>}
      <Footer /> */}
      <Home />

    </div>
  );
}

export default App;
