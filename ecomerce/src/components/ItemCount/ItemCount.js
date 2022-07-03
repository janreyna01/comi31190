import { useState } from "react";

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button onClick={decrement}>-</button>
                <h1>{quantity}</h1>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount