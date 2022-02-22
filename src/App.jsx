import Header from './components/header';
import Navbar from './components/navbar';
import ProductSection from './components/productSection';

import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <main>
        <section></section>
        <ProductSection/>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
