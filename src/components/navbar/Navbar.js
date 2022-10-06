import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import LogoEcommerce from '../CartWidget/LogoEcommers'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', background:'black'}}>
            <div>
                <LogoEcommerce />
            </div>
            <div>
                <button style={{display: 'center', alignItems:'center', color: 'green', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Chocolates</button>
                <button style={{display: 'center', color: 'blue', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Pegamentos</button>
                <button style={{display: 'center', color: 'red', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Filos</button>
                <button style={{display: 'center', color: 'brown', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Varios</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar