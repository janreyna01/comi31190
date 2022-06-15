const products = [
    {id:'1', name:'Body', price:'500', category:'ropa', image:'https://http2.mlstatic.com/D_NQ_NP_896488-MLA48424627133_122021-V.jpg', stock:10, description:'body super comodo'},
    {id:'2', name:'Chupete', price:'300', category:'accesorios', image:'https://m.media-amazon.com/images/I/71+OYLghtsL._SY355_.jpg', stock:10, description:'chupete avent'},
    {id:'3', name:'Ranita', price:'600', category:'ropa', image:'https://http2.mlstatic.com/D_NQ_NP_625206-MLA48524952822_122021-V.jpg', stock:10, description:'ranita de algodon'},
    {id:'4', name:'Buzo', price:'890', category:'ropa', image:'https://babyscompany.com/wp-content/uploads/2020/09/buzo-para-bebes.jpg', stock:11, description:'buzo de algodon'},
    {id:'5', name:'Pantalon', price:'1000', category:'ropa', image:'https://i.pinimg.com/originals/ba/ed/cf/baedcf8de82595f9b73718cd0117bd8e.jpg', stock:13, description:'pantalon de algodon'},
    {id:'6', name:'Prendedor', price:'100', category:'accesorios', image:'https://http2.mlstatic.com/D_NQ_NP_616325-MLA44836678062_022021-V.jpg', stock:30, description:'prendedor'},
    {id:'7', name:'Mamadera', price:'1250', category:'accesorios', image:'https://www.tienda.philips.com.ar/892-large_default/avent-mamadera-natural-para-bebes.jpg', stock:15, description:'mamadera avent'},
    {id:'8', name:'Autito', price:'1100', category:'juguetes', image:'https://http2.mlstatic.com/D_NQ_NP_839650-MLA47713267378_092021-O.webp', stock:7, description:'auto de plastico'},
    {id:'9', name:'Tractor', price:'1500', category:'juguetes', image:'https://http2.mlstatic.com/D_NQ_NP_695091-MLA41452184979_042020-O.jpg', stock:9, description:'tractor de plastico'},
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