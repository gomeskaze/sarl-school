import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState([]);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        roles: '',
        email: '',
        password: ''
    });

    const availableRoles = [
        { value: 'ROLE_ADMIN', label: 'Administrateur' },
        { value: 'ROLE_TEACHER', label: 'Enseignant' },
        { value: 'ROLE_STUDENT', label: 'Étudiant' },
        { value: 'ROLE_PARENT', label: 'Parent' }
    ];

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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

        // roles validation
        if (roles.length === 0) {
            errorsCopy.roles = 'Exige au moins un Identifiant';
            valid = false;
        } else {
            errorsCopy.roles = '';
        }

        // Email validation
        if (!email.trim()) {
            errorsCopy.email = 'Exige un Email valide';
            valid = false;
        } else if (!validateEmail(email)) {
            errorsCopy.email = 'Email invalide. Veiller vérifier addresse email';
            valid = false;
        } else {
            errorsCopy.email = '';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {   
            username: username,
            email: email,
            roles: roles,
            password: password
        }
        console.log(registerData);
        if (validationForm()) {
            try {
                await register(registerData);
                navigate('/login');
            } catch (error) {
                setError('Registration failed. Please try again.');
            }
        }
    };

    const handleRoleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setRoles([...roles, value]);
        } else {
            setRoles(roles.filter(role => role !== value));
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Register</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Identifiants</label>
                                    <div className={`border rounded p-3 ${errors.roles ? 'border-danger' : ''}`}>
                                        {availableRoles.map((roleOption) => (
                                            <div key={roleOption.value} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={roleOption.value}
                                                    value={roleOption.value}
                                                    checked={roles.includes(roleOption.value)}
                                                    onChange={handleRoleChange}
                                                />
                                                <label className="form-check-label" htmlFor={roleOption.value}>
                                                    {roleOption.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    {errors.roles && <div className="text-danger mt-1">{errors.roles}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
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
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Already have an account? <a href="/login">Login here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;