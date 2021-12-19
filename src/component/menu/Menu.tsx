import { Link } from 'react-router-dom'

import './Menu.css'

const Menu: React.FC = () => {
    return (
        <nav className="menu">
            <ul className="menu-item-list">
                <li className="menu-item"><Link to="/">Home</Link></li>
                <li className="menu-item"><Link to="/my-orders">My orders</Link></li>
                <li className="menu-item"><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    )
}

export default Menu