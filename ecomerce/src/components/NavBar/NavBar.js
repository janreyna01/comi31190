import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="div1">
            <h1 className="titulo">Bebe Shops</h1>
            <CarWidget className="carrito" />   
            </div>
            <div className="about">
                <Link to='/about'>About</Link>
                <Link to='/category/ropa'>Ropa</Link>
                <Link to='/category/juguetes'>Juguetes</Link>
                <Link to='/category/accesorios'>Accesorios</Link>
            </div>
        </nav>
    )
}

export default NavBar