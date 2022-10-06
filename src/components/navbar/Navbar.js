import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import LogoEcommerce from '../CartWidget/LogoEcommers'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', background:'black'}}>
            <div>
                <LogoEcommerce />
            </div>
            <div>
                <Link to={'/category/chocolates'} style={{display: 'center', alignItems:'center', color: 'green', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Chocolates</Link>
                <Link to={'/category/pegamentos'} style={{display: 'center', color: 'blue', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Pegamentos</Link>
                <Link to={'/category/filos'} style={{display: 'center', color: 'red', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Filos</Link>
                <Link to={'/category/varios'} style={{display: 'center', color: 'brown', borderRadius:'80px 20px', fontWeight: 'bold', fontFamily: 'verdana'}}>Varios</Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar