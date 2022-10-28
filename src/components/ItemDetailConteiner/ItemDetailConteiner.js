/* import '.\src\components\ItemDetailConteiner\ItemDetailconteiner.css'
 */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailConteiner = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [productId] = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data }

            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [productId])

    if (loading) {
        return <h1>loading</h1>
    }
    return (
        <div>
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} setCart={setCart}/>
        </div>

        </div>
    )
}

export default ItemDetailConteiner