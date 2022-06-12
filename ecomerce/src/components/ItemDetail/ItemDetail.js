const ItemDetail = ({name, image, price, description}) => {
    return(
        <div>
            <h1>{name}</h1>
            <img>{image}</img>
            <h2>{price}</h2>
            <p>{description}</p>
        </div>
        
    )
}

export default ItemDetail