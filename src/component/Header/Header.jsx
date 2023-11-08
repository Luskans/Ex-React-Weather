import './Header.css';
import logo from '../../assets/logo_transparent.png';

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}
