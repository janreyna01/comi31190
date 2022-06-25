import './CarWidget.css'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CarWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src="./images/carrito.png" alt="cart/widget" className='CartImg'/>
            { quantity }
        </Link>
    )
}

export default CarWidget


