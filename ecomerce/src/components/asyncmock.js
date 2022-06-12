const products = [
    {id:'1', name:'body', price:'500', category:'ropa', image:'', stock:'10', description:'body super comodo'},
    {id:'2', name:'chupete', price:'300', category:'accesorios', image:'', stock:'10', description:'chupete avent'},
    {id:'3', name:'ranita', price:'600', category:'ropa', image:'', stock:'10', description:'ranita de algodon'},
    {id:'4', name:'buzo', price:'890', category:'ropa', image:'', stock:'11', description:'buzo de algodon'},
    {id:'5', name:'pantalon', price:'1000', category:'ropa', image:'', stock:'13', description:'pantalon de algodon'},
    {id:'6', name:'prendedor', price:'100', category:'accesorios', image:'', stock:'30', description:'prendedor'},
    {id:'7', name:'mamadera', price:'1250', category:'accesorios', image:'', stock:'15', description:'mamadera avent'},
    {id:'8', name:'autito', price:'1100', category:'juguetes', image:'', stock:'7', description:'auto de plastico'},
    {id:'9', name:'tractor', price:'1500', category:'juguetes', image:'', stock:'9', description:'tractor de plastico'},
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

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}