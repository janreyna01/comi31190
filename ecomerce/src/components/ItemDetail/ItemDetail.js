const ItemDetail = ({title, imagen, precio, descripcion}) => {
    return(
        <div>
            <h1>{title}</h1>
            <img>{imagen}</img>
            <h2>{precio}</h2>
            <p>{descripcion}</p>
        </div>
        
    )
}

export default ItemDetail