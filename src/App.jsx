import Index from './pages';
import PageRes from './pages/res';
import PagePescado from './pages/pescado';
import PageCerdo from './pages/cerdo';
import PageMariscos from './pages/mariscos';
import PagePollo from './pages/pollo';
import PageDespensa from './pages/despensa';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './styles/style.css';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/res' element={<PageRes/>}/>
            <Route path='/pescado' element={<PagePescado/>}/>
            <Route path='/cerdo' element={<PageCerdo/>}/>
            <Route path='/mariscos' element={<PageMariscos/>}/>
            <Route path='/Pollo' element={<PagePollo/>}/>
            <Route path='/despensa' element={<PageDespensa/>}/>
            <Route path='/' element={<Index/>}/>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
