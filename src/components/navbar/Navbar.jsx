import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'




function Navbar() {
   

    return (
        <div style={{ backgroundColor: '#f2ede4'}}>
            <header className="min-vh-1000 navbar-default fixed-top" >
                <nav className="navbar d-flex" style={{ backgroundColor: '#f2ede4' }}>
                    <div className="container d-flex justify-content-between" >
                        <Link to = {"/"} className="navbar-brand fs-2" style={{ color: '#f37523'}}>
                            <i className="bi bi-globe-asia-australia" style={{ color: '#f37523', fontSize: '24px' }}></i>
                            <span style={{ color: 'black', fontSize: '25px' }}> Kaja</span>
                        </Link>
                        <div>
                            <Link to={"/"} className="nav mt-3">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to={"/"} className="nav mt-3">
                                Activity
                            </Link>
                        </div>
                        <div>
                            <Link to={"/"} className="nav mt-3">
                                Our Offer
                            </Link>
                        </div>
                        <div className="input-group d-flex" style={{ width: '120px' }}>
                            <Link to={"/"} >
                                <div className="d-flex">
                                    <button type="login button" className="nav-style btn border border-0 shadow shadow-sm rounded-pill me-3 hover-button" >
                                    <i className="bi bi-person" style={{ color: 'white', fontSize: '10px' }}></i><span style={{ fontSize: '12px', color: 'white' }}> Login / Register </span>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
}

export default Navbar;
