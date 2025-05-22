const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>SARL School</h5>
                        <p>Votre partenaire pour une éducation de qualité</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>
                            Email: contact@sarlschool.com<br />
                            Téléphone: +123 456 7890<br />
                            Adresse: 123 Rue de l'École, Ville
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Liens Rapides</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-light">À propos</a></li>
                            <li><a href="/contact" className="text-light">Contact</a></li>
                            <li><a href="/privacy" className="text-light">Politique de confidentialité</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} SARL School. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 