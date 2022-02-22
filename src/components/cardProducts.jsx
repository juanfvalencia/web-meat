import { Link } from "react-router-dom"

const CardProducts = ( {ruta, img, nombreProducto} ) => {

    return (
      <div>
        <li className="text-forshop">
          <Link to={ruta}>
            <div className="container-imagen">
              <img src={img} alt={nombreProducto} />
            </div>
          </Link>
          <span>{nombreProducto}</span>
        </li>
      </div>
    );

}

export default CardProducts;