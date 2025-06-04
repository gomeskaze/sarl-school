import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logout, isAuthenticated } from '../services/authService';
import { useState, useEffect } from 'react';

const Header = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifier l'état de connexion au chargement
        const currentUser = getCurrentUser();
        setUser(currentUser);

        // Écouter les changements dans le localStorage
        const handleStorageChange = () => {
            const updatedUser = getCurrentUser();
            setUser(updatedUser);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
            navigate('/login');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
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
                        {isAuthenticated() ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Bienvenue, {user?.username}</span>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="nav-link btn btn-link" 
                                        onClick={handleLogout}
                                        style={{ border: 'none', background: 'none' }}>
                                        Déconnexion
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Connexion</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Inscription</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;