import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, name, price, image, description }) => {

    return (
        <div className="card">
            <h1 className='titulocard'>{name}</h1>
            <img className='imagencard' src={image}/>
            <p className='preciocard'>${price}</p>
            <Link className='verdetallecard' to={'/detail/${id}'}>Ver Detalle</Link>
        </div>


    )
}

export default Item