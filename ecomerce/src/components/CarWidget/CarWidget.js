import './CarWidget.css'

const CarWidget = () => {
    return(
        <button to='/cart' className="CartWidget">
            <img src="./images/carrito.png" alt="cart/widget" className='CartImg'/>
            0
        </button>
    )
}

export default CarWidget


