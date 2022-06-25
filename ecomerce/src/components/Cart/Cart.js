import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div>
            <h1>Carrito de Compras</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <div >{prod.name}</div>
                            <div>Cantidad: {prod.quantity}</div>
                            <div>Precio x Uni: ${prod.price}</div>
                            <div>Subtotal: ${prod.price * prod.quantity}</div>
                            <button onClick={() => removeItem(prod.id)}>X</button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart