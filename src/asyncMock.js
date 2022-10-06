const products = 
[
    {id: 1, name:"Audifonos", price:100, category:"accesorio", img:"./img/1024accesorio1.jpg", stock: 20, description: "descripcion del objeto"},    
    {id: 2, name:"Teclado", price:200, categgory:"accesorio", img:"./img/1024accesorio2.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 3, name:"Mause", price:300, category:"accesorio", img:"./img/1024accesorio3.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 4, name:"Mause + Teclado", price:400, category:"accesorio", img:"./img/1024accesorio4.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 5, name:"Parlantes", price:500, category:"accesorio", img:"./img/1024accesorio5.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 6, name:"Silla", price:600, category:"accesorio", img:"./img/1024accesorio6.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 7, name:"GPU 1", price:700, category:"gpu", img:"./img/1024gpu1.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 8, name:"GPU 2", price:800, category:"gpu", img:"./img/1024gpu2.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 9, name:"GPU 3", price:900, category:"gpu", img:"./img/1024gpu3.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 10, name:"GPU 4", price:1000, category:"gpu", img:"./img/1024gpu4.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 11, name:"GPU 5", price:1100, category:"gpu", img:"./img/1024gpu5.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 12, name:"GPU 6", price:1200, category:"gpu", img:"./img/1024gpu6.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 13, name:"Monitor 1", price:1300, category:"monitor", img:"./img/1024monitor1.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 14, name:"Monitor 2", price:1400, category:"monitor", img:"./img/1024monitor2.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 15, name:"Monitor 3", price:1500, category:"monitor", img:"./img/1024monitor3.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 16, name:"Monitor 4", price:1600, category:"monitor", img:"./img/1024monitor4.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 17, name:"Monitor 5", price:1700, category:"monitor", img:"./img/1024monitor5.jpg", stock: 20, description: "descripcion del objeto"},
    {id: 18, name:"Monitor 6", price:1800, category:"monitor", img:"./img/1024monitor6.jpg", stock: 20, description: "descripcion del objeto"}
    ]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 200)
    })
}
