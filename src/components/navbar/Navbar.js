import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import LogoEcommerce from '../CartWidget/LogoEcommers'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='NavBar'>
            <Link to ='/'>
                <LogoEcommerce />
            </Link>

            <div className='Categories'>
                <NavLink to='/category/chocolates' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Chocolates</NavLink>
                <NavLink to='/category/pegamentos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Pegamentos</NavLink>
                <NavLink to='/category/filos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Filos</NavLink>
                <NavLink to='/category/varios' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >Varios</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar