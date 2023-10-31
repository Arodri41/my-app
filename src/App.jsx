import {Home} from './pages/inicio';
import {Nosotros} from './pages/nosotros'
import {Tienda} from './pages/productos'
import './App.css';
import { navbar } from './components/navBar_';
import itemListContainer from './components/itemListContainer_';
import { Routes, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';


function App() {
  return (
  <>
  <navbar />
  < Container className="mb-4" >
    <Routes>
      <Route path='./components/inicio' element={<Home />} />
      <Route path='./components/productos' element={<Tienda />} />
      <Route path='./components/nosotros' element={<Nosotros />} />

    </Routes>

   <itemListContainer imagen='https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2022/01/164-waving-hand-emoji-coloring-page.png' />

  </Container>
 </> 
 ) 
}

export default App;
