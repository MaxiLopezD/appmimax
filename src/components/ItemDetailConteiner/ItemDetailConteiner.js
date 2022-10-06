import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemDetailConteiner = () => {
    const[product, setProduct] = useState ({})
    const[loading, setloading] =useState(true)
    const[producId] =useParams()
    
    useEffect(() => {
        getProduct(producId).them(product => {
            setProduct(product)
        }).finally(() => {
            setloading(false)
        })
    }, [])

console.log(product)
    if(loading){
        return <h1>loading</h1>
    }
    return (
        <div>
            <h1> Detalle de Producto</h1>
            <h2>{product?.name}</h2>
            <h2>{product?.category}</h2>
            <h2>{product?.price}</h2>
            /*counter*/
        </div>
    )
}

export default ItemDetailConteiner