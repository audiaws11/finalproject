import { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { getBanners, getCategories, getPromos } from "../../api/api";
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from "../../components/layout/Layout";
import AOS from "aos";
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [categories, setCategories] = useState([]);
    const [promos, setPromos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bannersResponse = await getBanners();
                setBanners(bannersResponse.data.data);
                console.log('banner', bannersResponse.data.data);
    
                const categoriesResponse = await getCategories();
                setCategories(categoriesResponse.data.data);
                console.log('category', categoriesResponse.data.data);
    
                const promosResponse = await getPromos();
                setPromos(promosResponse.data.data);
                console.log('promo', promosResponse.data.data);
            } catch (error) {
                console.log(error);
            }
            AOS.init();
        };
    
        fetchData();
    
      
    }, []);
    

    return (
        <Layout>
           {/* Header */}
                <div className="container-fluid main" >
                    <div className="container-fluid article1">
                        <Carousel interval={4000} wrap={true} data-aos="zoom-in" >
                        <Carousel.Item>
                            <div className="container travel-layout" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left header-section" > 
                                        <h1 data-aos="fade-right" data-aos-duration="700">
                                            Explore<br />
                                            <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                        </h1 >
                                        <p data-aos="fade-right" data-aos-duration="900">Discover possibilities of travelling!</p>
                                        <LinkContainer to="/activity">
                                        <button className="btn btn-orange" data-aos="fade-right" data-aos-duration="1100" >Explore</button>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        {banners.slice(0, 3).map((banner, index) => (
                            <Carousel.Item key={index}> {/* Ensure you have a unique key for each item */}
                                <div className="container travel-layout" style={{ backgroundImage: `url(${banner.imageUrl})`, height: '500px' }}>
                                    <div className="row" style={{ height: '100%' }}>{banner.title}
                                        <div className="col-6 text-left header-section">
                                            <h1>
                                                Explore<br />
                                                <span style={{ color: '#f37523' }}>the world</span><br /> with us
                                            </h1>
                                            <p>Discover possibilities of travelling!</p>
                                            <LinkContainer to="/activity">
                                                <button className="btn btn-orange" data-aos="fade-right" data-aos-duration="1100" >Explore</button>
                                            </LinkContainer>
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
                                        <LinkContainer to="/activity">
                                            <button className="btn btn-orange" data-aos="fade-right" data-aos-duration="1100" >Explore</button>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                
                {/* Search Bar
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
            </div> */}

            
                            
           {/* Category */}
           <h2 className="category-header" > Travel categories</h2>
                <div className="category-container">
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                    <div className="box-card" key={index} style={{ backgroundColor: category.color }} onClick={() => navigate(`/activities-by-category/${category.id}`)}>
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

            {/* Promo */}
            <div className="offer-home container" >
            
                    {promos.length > 0 ? (
                         <div className="row">
                         <div className="offer-header col-6">
                             <h1 className="offer-title-1">{promos[0].title}</h1>
                             <div className="pricing-1">
                             <p>{promos[0].description}</p>
                             <p >from <span className="price-1">Rp. {promos[0].promo_discount_price} </span>/ person</p>
                             </div>
                            <LinkContainer to="/offer"><button className="explore-button-1">Explore Offer</button></LinkContainer>
                         </div>
                         <div className="images-wrapper-1 col-6">
                         <div className="images-1 row">
                             <div className="col-6">
                             <img src="https://elenpradera.com/wp-content/uploads/2018/12/DSC05684_LR_Blog.jpg" alt="imagePromo1" className="landscape1"/>
                             <img src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revision-2019/all-revision-destination/bromo22.jpg" alt="imagePromo2" className="coastline"/>
                             </div>
                             <div className="hot-offer-wrapper col-6">
                             <img src={promos[0].imageUrl} alt="imagePromo3" className="landscape2"/>
                                 <span className="hot-offer-tag">HOT OFFER</span>
                             </div>
                         </div>
                         </div>
                     </div>  
                    ) : (
                        <p>Loading promos...</p>
                        
                    )}
            </div>
        </div>

            
        
        </Layout>
    );
};

export default Home;

