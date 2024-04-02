import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap'; // Make sure Carousel is imported correctly
import Layout from "../../components/layout/Layout";
import './home.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
            {/* Header */}
            <div className="container-fluid main">
                <div className="container-fluid article1">
                    <Carousel interval={1000} wrap={true}>
                        <Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section">
                                        <h1 style={{ marginLeft: '50px', marginTop: '100px', marginRight: '50px', fontWeight: 'bolder', fontSize: '50px' }}>
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1>
                                        <p style={{ marginLeft: '50px' }}>Discover possibilities of travelling!</p>
                                        <button className="btn btn-orange" style={{ marginLeft: '50px' }}>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item><Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp3103579.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section">
                                        <h1 style={{ marginLeft: '50px', marginTop: '100px', marginRight: '50px', fontWeight: 'bolder', fontSize: '50px' }}>
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1>
                                        <p style={{ marginLeft: '50px' }}>Discover possibilities of travelling!</p>
                                        <button className="btn btn-orange" style={{ marginLeft: '50px' }}>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp9247775.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section">
                                        <h1 style={{ marginLeft: '50px', marginTop: '100px', marginRight: '50px', fontWeight: 'bolder', fontSize: '50px' }}>
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1>
                                        <p style={{ marginLeft: '50px' }}>Discover possibilities of travelling!</p>
                                        <button className="btn btn-orange" style={{ marginLeft: '50px' }}>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* Search Bar */}
                <div className="bar-search d-flex justify-content-center my-4" style={{ backgroundColor: '#f2ede4' }}>
                <div className="search-bar p-3 rounded-4 d-flex align-items-center" style={{ maxWidth: '1500px' }}>
                <div className="input-group">
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">Location</span>
                <input type="text" className="form-control border-0 text-center bg-transparent" placeholder="Spain" aria-label="Location" aria-describedby="basic-addon1" />
                </div>

                <div className="vr" />

                <div className="input-group">
                <span className="input-group-text border-0 bg-transparent" id="basic-addon2">Date</span>
                <input type="text" className="form-control border-0 text-center bg-transparent" placeholder="1/9/2023 - 10/9/2023" aria-label="Date" aria-describedby="basic-addon2" />
                </div>

                <div className="vr" />

                <div className="input-group">
                <span className="input-group-text border-0 bg-transparent" id="basic-addon3">Guests</span>
                <select className="form-control border-0 text-center bg-transparent" placeholder="2 adults" aria-label="Guests" aria-describedby="basic-addon3">
                            <option>2 adults</option>
                            <option>1 adult</option>
                            <option>3 adults</option>
                            <option>4 adults</option>
                </select>
                </div>

                <button className="btn btn-success rounded-pill px-4 ms-3">Search</button>
            </div>
            </div>

            {/* Category */}
            <h2 className="text-center my-4" style={{ fontWeight: 'bolder', paddingTop: '90px', paddingBottom: '50px', fontSize: '30px' }}> Travel categories</h2>
            <div className="category d-flex justify-content-center my-4" style={{ backgroundColor: '#f2ede4' }}>
                <div className="row" style={{ maxWidth: '1500px' }}>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wallpapercave.com/wp/wp3103579.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Travel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wallpapercave.com/wp/wp3103579.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Travel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://wallpapercave.com/wp/wp3103579.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Travel</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>

            </div>
        
        </Layout>
    );
};

export default Home;
