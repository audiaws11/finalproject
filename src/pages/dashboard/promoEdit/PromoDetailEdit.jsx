import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOfferById } from "../../../api/api";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDasboard";
import FooterDashboard from "../../../components/navbarDashboard/FooterDashboard";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../promoEdit/promoedit.css';

const PromoDetailEdit = () => {
    const [user, setUser] = useState({});
    const [promoDetail, setPromoDetail] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams();
    console.log(`Fetching details for banner ID: ${id}`); // For debugging

    const fetchLogin = () => {
        const token = localStorage.getItem("token");
        const API_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user';
        const headers = {
            'Authorization': `Bearer ${token}`,
            'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            'Content-Type': 'application/json'
        };

        axios.get(API_URL, { headers })
            .then(res => setUser(res.data.data))
            .catch(err => setError('Failed to fetch user data. Please try again later.'));
    };
    const fetchPromoId = () => {
        getOfferById(id)
            .then((response) => {
                setPromoDetail(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.error('Failed to fetch banner details:', err);
            });
    };

    useEffect(() => {
        fetchPromoId();
    }, [id]);

    useEffect(() => {
        fetchLogin();
    }, []);
    
    const formatDate = (dateStr) => {
        return dateStr ? new Date(dateStr).toLocaleDateString() + ' (' + new Date(dateStr).toLocaleTimeString() + ')' : '';
    };

    return (
        
        <div style={{ backgroundColor: '#f2ede4' }}>
        <NavbarDashboard />
        <header className="header1 login-fetch">
        <div className="dashboard">
            <h2>{user.name || "Guest"} ({user.email})<img src={user.profilePictureUrl} alt="Profile" /></h2>
        </div>
        </header>
            
           
               
            
               <div className='banner-detail'>
               <div className="container-fluid offer-detail detail" >
                    <div className="container-fluid offer1-detail" data-aos="" data-aos-duration="500">
                        <div className="container offer-layout-detail" style={{ backgroundImage: `url(${promoDetail.imageUrl})`, height: '500px' }}>
                            <div className="row" style={{ height: '100%' }}>
                                <div className="col-6 text-left offer-detail-header-section">
                                    <h1>{promoDetail.title}</h1>
                                    <div className="breadcrumb-offer-detail">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
                                            <Breadcrumb.Item href="/dashboard/offer">Offer</Breadcrumb.Item>
                                            <Breadcrumb.Item active>{promoDetail.title}</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* body */}
                 <div className="tour-offer-container">
                    <div className="tour-offer-rating row container">
                        <div className="col">
                            <h2>{promoDetail.title}</h2>
                            <p>ID: {promoDetail.id}</p>
                        </div>
                    </div>
                    <div className="tour-offer-description">
                        <h3>Description</h3>
                        <p>{promoDetail.description}</p>
                        <h3>Terms and Condition</h3>
                        <p>{promoDetail.terms_condition}</p>
                        <h3>Detail</h3>
                        <p>Created: {formatDate(promoDetail.createdAt)}</p>
                        <p>Updated: {formatDate(promoDetail.updatedAt)}</p>
                    </div>
                </div>
               </div>

            <FooterDashboard />
        </div>
    );
};

export default PromoDetailEdit;
