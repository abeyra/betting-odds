import './Header.scss';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="menu">
                <h1>Odd Kingz</h1>
                <ul>
                    <li><Link to="/"> Basketball</Link></li>
                    <li><Link to="/Hockey"> Hockey</Link></li>
                </ul>
            </nav>
        </header>
    )
}