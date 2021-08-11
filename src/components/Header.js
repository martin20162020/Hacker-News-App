import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <nav>
                <h1 className="hackerHeading">Hacker News</h1>
                <div className="header-menu">
                    <Link to="/" className="header-item">Main </Link>
                    <Link to="/search" className="header-item"> Search </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
