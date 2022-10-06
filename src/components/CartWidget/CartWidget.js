import cart from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart'/>
            <p style={{ color:'white'}}> 5 </p>
        </div>
    )
}

export default CartWidget