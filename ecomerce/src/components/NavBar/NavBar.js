import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {
    return (
        <nav>
            <h1 className="titulo">Bebe Shops</h1>
            <div>
                <button>Ropa</button>
                <button>Accesorios</button>
                <button>Juguetes</button>
            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar