import './Item.css'
const Item = ({ nombre, precio, imagen, descripcion }) => {
    return (
        <div className="card">
            <h1>{nombre}</h1>
        </div>


    )
}

export default Item