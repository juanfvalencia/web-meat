

const CardProducts = ( {img, nombreProducto} ) => {

    return (
      <div>
        <li className="text-forshop">
          <div className="container-imagen">
            <img src={img} alt={nombreProducto} />
          </div>
          <span>{nombreProducto}</span>
        </li>
      </div>
    );

}

export default CardProducts