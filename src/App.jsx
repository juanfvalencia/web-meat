import Index from './pages';
import PageRes from './pages/res';
import PagePescado from './pages/pescado';
import PageCerdo from './pages/cerdo';
import PageMariscos from './pages/mariscos';
import PagePollo from './pages/pollo';
import PageDespensa from './pages/despensa';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/res' element={<PageRes/>}/>
          <Route path='/pescado' element={<PagePescado/>}/>
          <Route path='/cerdo' element={<PageCerdo/>}/>
          <Route path='/mariscos' element={<PageMariscos/>}/>
          <Route path='/Pollo' element={<PagePollo/>}/>
          <Route path='/despensa' element={<PageDespensa/>}/>
          <Route path='/' element={ <Index/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
