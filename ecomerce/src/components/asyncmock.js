const products = [
    {id:'1', nombre:'body', precio:'500', categoria:'ropa', imagen:'', stock:'10', descripcion:'body super comodo'},
    {id:'2', nombre:'chupete', precio:'300', categoria:'accesorios', imagen:'', stock:'10', descripcion:'chupete avent'},
    {id:'3', nombre:'ranita', precio:'600', categoria:'ropa', imagen:'', stock:'10', descripcion:'ranita de algodon'},
    {id:'4', nombre:'buzo', precio:'890', categoria:'ropa', imagen:'', stock:'11', descripcion:'buzo de algodon'},
    {id:'5', nombre:'pantalon', precio:'1000', categoria:'ropa', imagen:'', stock:'13', descripcion:'pantalon de algodon'},
    {id:'6', nombre:'prendedor', precio:'100', categoria:'accesorios', imagen:'', stock:'30', descripcion:'prendedor'},
    {id:'7', nombre:'mamadera', precio:'1250', categoria:'accesorios', imagen:'', stock:'15', descripcion:'mamadera avent'},
    {id:'8', nombre:'autito', precio:'1100', categoria:'juguete', imagen:'', stock:'7', descripcion:'auto de plastico'},
    {id:'9', nombre:'tractor', precio:'1500', categoria:'juguete', imagen:'', stock:'9', descripcion:'tractor de plastico'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}