import Logo from '../media/Logo.png';

const Header = () => {

    return(
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
    )
}

export default Header;