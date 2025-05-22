import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validationForm) {
            const loginData = { 
                username: username,
                password: password
            };
            console.log(loginData);
            try {
                await login(loginData);
                navigate('/dashboard');
            } catch (err) {
                setError('Invalid username or password');
            }
        }
    };

    const validationForm = () => {
        let valid = true;
        const errorsCopy = { ...errors };

        // Username validation
        if (!username.trim()) {
            errorsCopy.username = 'Exige un nom utilisateur';
            valid = false;
        } else {
            errorsCopy.username = '';
        }

        // Password validation
        if (!password) {
            errorsCopy.password = 'Exige un mot de passe';
            valid = false;
        } else if (password.length < 6) {
            errorsCopy.password = 'Le mot e passe doit être constituer au moins 6 caractères';
            valid = false;
        } else {
            errorsCopy.password = '';
        }

        setErrors(errorsCopy);
        return valid;
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Login</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button 
                                            className="btn btn-outline-secondary" 
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <i className={`bi bi-eye${showPassword ? '-slash' : ''}`}></i>
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Login</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Don't have an account? <a href="/register">Register here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;