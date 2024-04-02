import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout/Layout";
import './home.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
       <Layout>
            <div className="container-fluid main" style={{ backgroundColor: '#f2ede4'}}>
            <div className="container-fluid article1">
            <div className="container travel-layout">
                    <div className="row">
                        <div className="col text-center header-section">
                        <h1>Explore the world with us</h1>
                        <p>Discover possibilities of travelling!</p>
                        <button className="btn btn-orange">Explore</button>
                        </div>
                    </div>

                    <div className="row form-row">
                        <div className="col-md-4 offset-md-2">
                        <input type="text" className="form-control" placeholder="Location" defaultValue="Spain" />
                        </div>
                        <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Date" defaultValue="01/09/2023 - 10/09/2023" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 offset-md-2">
                        <select className="form-control">
                            <option>2 adults</option>
                            <option>1 adult</option>
                            <option>3 adults</option>
                            <option>4 adults</option>
                        </select>
                        </div>
                        <div className="col-md-2">
                        <button className="btn btn-green">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    
    );
};

export default Home;
