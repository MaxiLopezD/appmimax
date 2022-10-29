import logo from './assets/logomimax.png'

const LogoEcommerce = () => {
    return (
        <div>
            <img src={logo} className= 'w-100' alt='LogoEcommerce' width= '75px' height='75'/>
            <p style={{ display: 'flex', justifyContent: 'center', color:'`black`'}}>Distribuidora MIMAX</p>
        </div>
        
    )
}

export default LogoEcommerce