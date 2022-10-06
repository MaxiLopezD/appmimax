import logo from './assets/logomimax.png'

const LogoEcommerce = () => {
    return (
        <div>
            <img src={logo} className= 'w-50' alt='LogoEcommerce' width= '150px'/>
            <p style={{ display: 'flex', justifyContent: 'center', color:'white'}}>Distribuidora MIMAX</p>
        </div>
        
    )
}

export default LogoEcommerce