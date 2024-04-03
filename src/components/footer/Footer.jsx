import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




function Footer() {

    return (
        <footer id="footer" className="p-5">
            <div className="container">
                <div className="row align-items-start">
        
                    <div id="followus" className="col mb-3 text-center align-items-center">
                    <div className="text-center font-weight-bold " style={{ fontSize: '25px', marginBottom: '50px', fontWeight: 'bolder', color: '#f2ede4' }}> 
                        Subscribe to our newsletter
                        <p style={{ color: '#878e7f', fontWeight: 'lighter', fontSize: '15px' , marginTop: '10px'}}>know about our offers first!</p>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <input type="text" className=" form border-0 rounded-5" placeholder=" youremail@email.com" style={{ backgroundColor: '#f2ede4', fontSize: '18px', fontWeight: 'lighter' , alignContent: 'center'}} />
                                    </div>
                                    <div>
                                    <button type="button" className="btn btn-xsmall rounded-5 mt-3" style={{ background: '#f37523', color: 'aliceblue', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '30px', '--bs-btn-font-size': '14px'}}>
                                        <b>Subscribe</b>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="copyright col text-start">
                        <i className="bi bi-globe-asia-australia" style={{ color: '#f37523', fontSize: '20px' }}></i>
                        <span style={{ color: '#f2ede4', fontSize: '20px' }}> Kaja</span>
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
