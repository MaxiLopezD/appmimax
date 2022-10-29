/* const products = [
    { 
        id: '1', 
        name: 'Ferrero 12', 
        price: 1000, 
        category: 'chocolate', 
        img:'imagen de rafaello', 
        stock: 25, 
        description:'Descripcion de ferrero x3'
    },
    { id: '2', name: 'Rafaello', price: 2000, category: 'chocolate', img:'imagen de rafaelo', stock: 16, description:'Descripcion de rafaelo'},
    { id: '3', name: 'Pico dulce', price: 999, category: 'varios', img:'imagen de pico dulce', stock: 10, description:'Descripcion pico dulce'},
    { id: '4', name: 'Baby Doll', price: 1500, category: 'varios', img:'imagen de baby dol', stock: 10, description:'Descripcion baby doll'},
    { id: '6', name: 'Presto', price: 150, category: 'filos', img:'imagen de presto', stock: 10, description:'Descripcion presto'},
    { id: '7', name: 'Tres filos', price: 200, category: 'filos', img:'imagen de tres filos', stock: 10, description:'Descripcion tres filos'},
    { id: '8', name: 'La Gotita', price: 300, category: 'pegamentos', img:'imagen de la gotita', stock: 10, description:'Descripcion la gotita'},
    { id: '9', name: 'La Gotita Gel', price: 350, category: 'pegamentos', img:'imagen de la gotita gel', stock: 10, description:'Descripcion la gotita gel'}

]


export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId? products.filter(prod=>prod.category === categoryId):products)
        }, 1100)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

/* export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
} */