import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div>
                <h1>Ecommerce de MIMAX</h1>
            </div>
            <div>
                <button>Chocolates</button>
                <button>Pegamentos</button>
                <button>Filos</button>
                <button>Varios</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar