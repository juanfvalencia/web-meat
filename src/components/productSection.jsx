import CardProducts from "./cardProducts";

import Res from '../media/pictures/Res.png';
import Pescado from '../media/pictures/Pescado.png';
import Mariscos from '../media/pictures/Mariscos.png';
import Cerdo from '../media/pictures/Cerdo.png';
import Pollo from '../media/pictures/Pollo.png';
import Despensa from '../media/pictures/Despensa.png';


const ProductSection = () => {

    return(
        <section className="primary-container-forshop">
          <h3 className="text-title">COMPRAR POR</h3>
          <ul className="container-forshop">
            <CardProducts ruta='/res' img={Res} nombreProducto='RES'/>
            <CardProducts ruta='/pescado' img={Pescado} nombreProducto='PESCADO'/>
            <CardProducts ruta='/cerdo' img={Cerdo} nombreProducto='CERDO'/>
            <CardProducts ruta='/mariscos' img={Mariscos} nombreProducto='MARISCOS'/>
            <CardProducts ruta='/pollo' img={Pollo} nombreProducto='POLLO'/>
            <CardProducts ruta='/despensa' img={Despensa} nombreProducto='DESPENSA'/>
          </ul>
        </section>
    )
}

export default ProductSection;