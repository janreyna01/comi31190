import { useContext } from 'react'
import CarWidget from '../CarWidget/CarWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../Context/CartContext'


const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <nav>
            <Link to='/' className="div1">
            <h1 className="titulo">Bebe Shops</h1> 
            </Link>
            <div className="about">
                <NavLink to='/category/ropa'>Ropa</NavLink>
                <NavLink to='/category/juguetes'>Juguetes</NavLink>
                <NavLink to='/category/accesorios'>Accesorios</NavLink>
            </div>
            {quantity > 0 && <CarWidget />}
        </nav>
    )
}

export default NavBar