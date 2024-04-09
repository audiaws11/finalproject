
import { getPromos } from "../../api/api";
import { useEffect, useState } from "react";
import AOS from "aos";
import Layout from "../../components/layout/Layout";
import './offer.css'
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Offer = () => {
    const [promos, setPromos] = useState([]);

    const fetchPromo = () => {
        getPromos()
            .then((response) => {
                setPromos(response.data.data);
                console.log('promo', response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchPromo();
        AOS.init();
    }, []);

    return (
        <Layout>
        <div style={{ backgroundColor: '#f2ede4', height: '100%'}}>
              {/* header offer */}
              <div className="container-fluid offer" >
                    <div className="container-fluid offer1" data-aos="" data-aos-duration="500">
                    <div className="container offer-layout" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg)', height: '500px' }}>
                                <div className="row" style={{ height: '100%' }}>
                                    <div className="col-6 text-left offer-header-section" > 
                                        <h1 data-aos="fade-right" data-aos-duration="700">
                                            Mountain<br />
                                            gateaway
                                        </h1 >
                                        <p data-aos="fade-right" data-aos-duration="900">Discover possibilities of travelling!</p>
                                    </div>
                                </div>
                     </div>
                    </div>
                </div>

                {/* content */}
                <div className="container mt-4">
                    <div className="row trip-row">
                    <p className="offer-title">Trips available</p>
                    {promos.map((promo, index) => (
                        
                        <div className="col-3 mb-4" key={index}>
                        <div className="trip-card">
                            <img src={promo.imageUrl} className="trip-image" alt="tripname" />
                            <div className="trip-info">
                            <h5 className="trip-name">{promo.title}</h5>
                            <p className="trip-location">Promo code: <span>{promo.promo_code}</span></p>
                            <p className="trip-price">from <span>Rp {promo.promo_discount_price}</span></p>
                            </div>
                        </div>
                    </div>  
                    ))}
{/* 
                     <div className="col-3 mb-4">
                        <div className="trip-card">
                            <img src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg" className="trip-image" alt="tripname" />
                            <div className="trip-info">
                            <h5 className="trip-name">Name</h5>
                            <p className="trip-location">Location</p>
                            <p className="trip-price">from <span>Rp </span></p>
                            </div>
                        </div>
                    </div> 

                     <div className="col-3 mb-4">
                        <div className="trip-card">
                            <img src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg" className="trip-image" alt="tripname" />
                            <div className="trip-info">
                            <h5 className="trip-name">Name</h5>
                            <p className="trip-location">Location</p>
                            <p className="trip-date">Date</p>
                            <p className="trip-price">from <span>$0000</span></p>
                            </div>
                        </div>
                    </div> 

                     <div className="col-3 mb-4">
                        <div className="trip-card">
                            <img src="https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg" className="trip-image" alt="tripname" />
                            <div className="trip-info">
                            <h5 className="trip-name">Name</h5>
                            <p className="trip-location">Location</p>
                            <p className="trip-date">Date</p>
                            <p className="trip-price">from <span>$0000</span></p>
                            </div>
                        </div>
                    </div>   */}


                    </div>
                </div>


        </div>
        </Layout>
    )
}

export default Offer;