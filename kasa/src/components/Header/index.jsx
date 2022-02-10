import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <Link to="/">
                    <img src="/logo.svg" className="nav__img" alt="" />
                </Link>
                <div>
                    <Link className="nav__link" to="/">
                        Accueil
                    </Link>
                    <Link className="nav__link" to="/aboutUs">
                        À propos
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
