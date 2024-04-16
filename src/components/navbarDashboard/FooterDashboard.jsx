import './footerDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




function Footer() {

    return (
        <footer id="footer" >
               
            <div className="container">
                <div className="row align-items-end" style={{paddingTop: '30px'}}>
                    <div className="copyright col text-start">
                        <img src="/image2vector.svg" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className="copyright col text-center" style={{  fontSize: '12px', color: '#878e7f' }}>
                        All rights Reserved <i className="bi bi-c-circle" ></i> <b>Audia Winniar Savitri 2024</b>
                    </div>
                    <div className="copyright col text-end">
                        Made with <i className="bi bi-heart-fill"></i> for Dibimbing Final Project
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
