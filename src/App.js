import Home from './components/inicio';
import './App.css';
import navbar from './components/navBar_';
import itemListContainer from './components/itemListContainer_';


function App() {
  return (
    <div className="App">

   <Home  />
   <itemListContainer imagen='https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2022/01/164-waving-hand-emoji-coloring-page.png' />
    </div>
  );
}

export default App;
