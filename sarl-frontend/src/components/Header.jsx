import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">SARL School</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Connexion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Inscription</Link>
                        </li>
                        <li className="nav-item">
                            <button 
                                onClick={handleLogout}
                                className="nav-link btn btn-link"
                                style={{ border: 'none', background: 'none' }}
                            >
                                <i className="bi bi-box-arrow-right me-1"></i>
                                Déconnexion
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;