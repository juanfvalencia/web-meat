import './styles/style.css';
import Logo from './media/Logo.png';
import Res from './media/pictures/Res.png';
import Pescado from './media/pictures/Pescado.png';
import Mariscos from './media/pictures/Mariscos.png';
import Cerdo from './media/pictures/Cerdo.png';
import Pollo from './media/pictures/Pollo.png';
import Despensa from './media/pictures/Despensa.png';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <ul className="primary-navbar text">
            <li>
              <img src={Logo} alt="Logo" className="logo"/>
            </li>
            <li>
              <div className="inputSearch">
                <input placeholder="Buscar..."/>
                <i className="fa-solid fa-magnifying-glass buttonSearch"></i>
              </div>
            </li>
            <li>
              <div className="containerLogin">
                <span for="cuenta">Iniciar Sesión / Registrarse</span>
                <button name="cuenta" type="button" className="buttonLogin text">
                  Mi cuenta
                </button>
              </div>
            </li>
          </ul>
        </div>
        <nav>
          <ul className="secondary-navbar text">
            <li>
              <button className="button-navbar text buttonOfertas">
                ¡OFERTAS!
              </button>
            </li>
            <li>
              <button className="button-navbar text">PRODUCTOS</button>
            </li>
            <li>
              <button className="button-navbar text">RECETAS</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section></section>
        <section className="primary-container-forshop">
          <h3 className="text-title">COMPRAR POR</h3>
          <ul className="container-forshop">
            <li className="text-forshop">
              <div className="container-imagen">
                <img src={Res} alt="Carne de Res"/>
              </div>
              <span>RES</span>
            </li>
            <li className="text-forshop">
              <div className="container-imagen">
                <img src={Pescado} alt="Pescado"/>
              </div>
              <span>PESCADO</span>
            </li>
            <li className="text-forshop">
              <div className="container-imagen">
                <img src={Mariscos} alt="Mariscos"/>
              </div>
              <span>MARISCOS</span>
            </li>
            <li className="text-forshop">
              <div className="container-imagen">
                <img
                  src={Cerdo} alt="Carne de Cerdo"/>
              </div>
              <span>CERDO</span>
            </li>
            <li className="text-forshop">
              <div className="container-imagen">
                <img src={Pollo} alt="Pollo"/>
              </div>
              <span>AVES</span>
            </li>
            <li className="text-forshop">
              <div className="container-imagen">
                <img src={Despensa} alt="Despensa"/>
              </div>
              <span>DESPENSA</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
