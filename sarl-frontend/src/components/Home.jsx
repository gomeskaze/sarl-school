import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section position-relative">
                <div className="hero-overlay"></div>
                <div className="container position-relative">
                    <div className="row min-vh-75 align-items-center">
                        <div className="col-lg-8 text-white fade-in">
                            <h1 className="display-4 fw-bold mb-4">SARL School</h1>
                            <h2 className="h3 mb-4">Excellence Éducative en Afrique</h2>
                            <p className="lead mb-4">
                                Une institution d'enseignement supérieur de référence, 
                                formant les leaders de demain avec des valeurs africaines fortes.
                            </p>
                            <div className="d-flex gap-3">
                                <Link to="/register" className="btn btn-primary btn-lg">
                                    S'inscrire
                                </Link>
                                <Link to="/about" className="btn btn-outline-light btn-lg">
                                    En savoir plus
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-4 fade-in">
                        <div className="card h-100 feature-card">
                            <div className="card-body text-center">
                                <i className="bi bi-book text-primary display-4 mb-3"></i>
                                <h3 className="h4 mb-3">Excellence Académique</h3>
                                <p className="text-muted">
                                    Des programmes d'études rigoureux et adaptés aux besoins 
                                    du marché africain, avec un corps enseignant qualifié.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card h-100 feature-card">
                            <div className="card-body text-center">
                                <i className="bi bi-people text-primary display-4 mb-3"></i>
                                <h3 className="h4 mb-3">Communauté Africaine</h3>
                                <p className="text-muted">
                                    Une communauté diverse et inclusive qui célèbre 
                                    la richesse culturelle africaine et favorise l'échange.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="card h-100 feature-card">
                            <div className="card-body text-center">
                                <i className="bi bi-graph-up text-primary display-4 mb-3"></i>
                                <h3 className="h4 mb-3">Opportunités de Carrière</h3>
                                <p className="text-muted">
                                    Des connexions solides avec les entreprises africaines 
                                    et internationales pour un avenir professionnel prometteur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5 text-secondary">Pourquoi Choisir SARL School ?</h2>
                    <div className="row g-4">
                        <div className="col-md-6 fade-in">
                            <div className="d-flex align-items-start why-choose-item">
                                <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                                <div>
                                    <h4 className="text-secondary">Infrastructure Moderne</h4>
                                    <p className="text-muted">
                                        Des installations de pointe et des technologies 
                                        modernes pour un apprentissage optimal.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="d-flex align-items-start why-choose-item">
                                <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                                <div>
                                    <h4 className="text-secondary">Enseignants Experts</h4>
                                    <p className="text-muted">
                                        Un corps enseignant expérimenté et dédié à 
                                        l'excellence académique.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="d-flex align-items-start why-choose-item">
                                <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                                <div>
                                    <h4 className="text-secondary">Programmes Adaptés</h4>
                                    <p className="text-muted">
                                        Des cursus conçus pour répondre aux besoins 
                                        spécifiques du marché africain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fade-in" style={{ animationDelay: '0.6s' }}>
                            <div className="d-flex align-items-start why-choose-item">
                                <i className="bi bi-check-circle-fill text-primary fs-4 me-3"></i>
                                <div>
                                    <h4 className="text-secondary">Réseau Professionnel</h4>
                                    <p className="text-muted">
                                        Des opportunités de stage et d'emploi avec 
                                        des entreprises leaders en Afrique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center fade-in">
                        <h2 className="mb-4 text-secondary">Rejoignez Notre Communauté</h2>
                        <p className="lead mb-4">
                            Devenez partie intégrante d'une institution qui forme 
                            les leaders de demain en Afrique.
                        </p>
                        <Link to="/register" className="btn btn-primary btn-lg">
                            Commencer Votre Parcours
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;