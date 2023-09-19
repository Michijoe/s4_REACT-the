import { useState } from 'react'

function Nav() {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Accueil</a>
            <a href="#catalogue" onClick={() => setActiveNav('#catalogue')} className={activeNav === '#catalogue' ? 'active' : ''}>Catalogue</a>
        </nav>
    )
}

export default Nav