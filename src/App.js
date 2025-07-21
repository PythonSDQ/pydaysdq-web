import './App.css';
import pydayLogo from './images/pyday-logo.jpeg';
import { SPONSORS } from './consts';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-body-tertiary">
                <div class="container-fluid">
                    <a className="navbar-brand mx-3" href="#home">
                        <img src={pydayLogo} style={{ width: "50px", height: "50px", borderRadius: "5px" }} alt="" />
                    </a>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Abrir menú de navegación"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#acerca">
                                    Acerca
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#patrocinadores">
                                    Patrocinadores
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="home" className="container mt-5 mb-5 text-center">
                <img src={pydayLogo} alt="PyDayDO Logo" className="img-fluid" style={{ maxWidth: '400px', height: 'auto' }} />
                <h3>2025</h3>
                <p>29 de Octubre en Santo Domingo</p>
                <div className="btn-group mt-3 flex-wrap">
                    <button className="btn btn-primary">TICKETS</button>
                    <button className="btn btn-info">PATROCINANOS</button>
                </div>
            </section>

            <section id="acerca" className="container mt-5 mb-5 text-center text-wrap" style={{ maxWidth: "100%", width: "60rem" }}>
                <h2>Acerca de PyDayDO</h2>
                <p>
                    PyDay es una conferencia gratuita organizada por la comunidad Python SDQ, que busca reunir a todos los entusiastas de Python para compartir distintas temáticas relacionadas al lenguaje, desde principiantes hasta usuarios avanzados.
                </p>
                <h4>
                    ¿Cómo es el formato?
                </h4>
                <p>
                    Las charlas tendrán una duración de 45 minutos, en las cuales las personas tendrán la oportunidad de mostrar un tema o trabajo de su interés, el único requisito es que sea relacionado a Python o su comunidad.
                </p>
            </section>

            <section id="patrocinadores" className="container mt-5">
                <h2>Patrocinadores</h2>
                <p>
                    Agradecemos a nuestros patrocinadores por su apoyo. Sin ellos, este evento no sería posible.
                </p>
                <div className="row">
                    {SPONSORS ? SPONSORS.map((sponsor, key) => (
                        <div className="col-6 col-md-3 mb-2 text-center" key={key}>
                            <a target="_blank" rel="noreferrer" href={sponsor.website}>
                                <img className="img-sponsor-fluid img-fluid" src={sponsor.logo} alt={`Logo ${sponsor.name}`} />
                            </a>
                        </div>
                    )) : null}
                </div>
            </section>

            <footer className="text-center mt-5">
                <p>© 2025 PyDayDO. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default App;