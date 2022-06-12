import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({id, name, price, image, description }) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <Link to={'/detail/${id}'}>Ver Detalle</Link>
        </div>
    

    )
}

export default Item