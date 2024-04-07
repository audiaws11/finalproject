import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap'; // Make sure Carousel is imported correctly
import Layout from "../../components/layout/Layout";
import './home.css';
import axios from "axios";

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);

    const getBanner = () => {
        axios
            .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',{
                headers: {
                    'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'}
            })
            .then((response) => {
                setBanners(response.data.data);
                console.log('banner',response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getCategories = () => {
        axios
            .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',{
                headers: {
                    'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
                }
            })
            .then((response) => {
                setCategories(response.data.data);
                console.log('category',response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getBanner();
    }, []);
    
    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
           {/* Header */}
                <div className="container-fluid main">
                    <div className="container-fluid article1">
                        <Carousel interval={3000} wrap={true} >
                        <Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section">
                                        <h1 >
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1>
                                        <p >Discover possibilities of travelling!</p>
                                        <button className="btn btn-orange" >Explore</button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp3103579.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section">
                                        <h1 >
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1>
                                        <p >Discover possibilities of travelling!</p>
                                        <button className="btn btn-orange" >Explore</button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {banners.map((banner, index) => (
                            <Carousel.Item key={index}> {/* Ensure you have a unique key for each item */}
                                <div className="container travel-layout" style={{ backgroundImage: `url(${banner.imageUrl})`, height: '500px' }}>
                                    <div className="row" style={{ height: '100%' }}>{banner.title}
                                        <div className="col-6 text-left header-section">
                                            <h1>
                                                Explore<br />
                                                <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                            </h1>
                                            <p>Discover possibilities of travelling!</p>
                                            <button className="btn btn-orange">Explore</button>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                         <Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp9247775.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section">
                                        <h1>
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1>
                                        <p>Discover possibilities of travelling!</p>
                                        <button className="btn btn-orange">Explore</button>
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
           <h2 className="category-header"> Travel categories</h2>
                <div className="category-container">
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                    <div className="box-card" key={index} style={{ backgroundColor: category.color }}>
                        <div className="card">
                        <img src={category.imageUrl} className="card-img-top" alt={`${category.name}`} />
                        <div className="card-body">
                            <h5 className="card-title">{category.name}</h5>
                        </div>
                        </div>
                    </div>
                    ))
                ) : (
                    <p>Loading categories...</p>
                )}
                </div>
            </div>
        
        </Layout>
    );
};

export default Home;

