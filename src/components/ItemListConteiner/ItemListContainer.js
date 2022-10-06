import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setloading] =useState (true)
    const {categoryId} =useParams()

    useEffect(() => {
        setloading (true)
        getProducts(categoryId).then(products => {
                setProducts(products)
            }). finally(() =>{
                setloading (false)
            })
        },[categoryId])

    console.log(products)

        if(loading) {
            return <h1>loading...</h1>
        }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    ) 
}

export default ItemListContainer