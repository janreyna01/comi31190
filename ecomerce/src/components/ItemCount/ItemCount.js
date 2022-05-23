import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count) => count - 1)
    }

    const increment = () => {
        setCount((count) => count + 1)
    }
    return (
        <div style={{ display: 'flex' }}>
            <button onclick={decrement}>-</button>
            <h1>{count}</h1>
            <button onclick={increment}>+</button>
        </div>
    )
}

export default ItemCount