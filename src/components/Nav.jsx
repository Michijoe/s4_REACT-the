import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Nav() {
    const location = useLocation();

    return (
        <nav>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
            <Link to="/catalogue" className={location.pathname === '/catalogue' ? 'active' : ''}>Catalogue</Link>
        </nav>
    )
}

export default Nav