import {Link} from 'react-router-dom';
import './styles.css';
import Logo from '../../img/PrintExt.png';
import './styles.css'


const Header = () =>{
    return (
        <main className='containerMain'>
            <img src={Logo} alt="Print Brain"/>

            <ul>
                <li><Link to="/"><a>HOME</a></Link></li>
                <li><Link to="/services"><a>SERVIÇOS</a></Link></li>
                <li><Link to="contato"><a>CONTATO</a></Link></li>
            </ul>
        </main>
    )
}

export default Header;