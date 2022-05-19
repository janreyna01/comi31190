import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <h1 className="titulo">Bebe Shops</h1>
            <div>
                <button>Ropa</button>
                <button>Accesorios</button>
                <button>Juguetes</button>
            </div>
        </nav>
    )
}

export default NavBar