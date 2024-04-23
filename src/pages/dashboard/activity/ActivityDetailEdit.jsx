import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getActivityById } from "../../../api/api";
import NavbarDashboard from "../../../components/navbarDashboard/NavbarDasboard";
import FooterDashboard from "../../../components/navbarDashboard/FooterDashboard";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './activityedit.css';

const ActivityDetailEdit = () => {
    const [user, setUser] = useState({});
    const [activityDetailEdit, setActivityDetailEdit] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams();
    console.log(`Fetching details for Activity ID: ${id}`); 

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
    const fetchActivityId = () => {
        getActivityById(id)
            .then((response) => {
                setActivityDetailEdit(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.error('Failed to fetch banner details:', err);
            });
    };

    useEffect(() => {
        fetchActivityId();
    }, [id]);

    useEffect(() => {
        fetchLogin();
    }, []);
    

    // Helper function to safely access and format date strings
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
                        <div className="container offer-layout-detail" style={{ backgroundImage: `url(${activityDetailEdit.imageUrls})`, height: '500px' }}>
                            <div className="row" style={{ height: '100%' }}>
                                <div className="col-6 text-left offer-detail-header-section">
                                    <h1>{activityDetailEdit.title}</h1>
                                    <div className="breadcrumb-offer-detail">
                                        <Breadcrumb>
                                            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
                                            <Breadcrumb.Item href="/dashboard/activity">Activity</Breadcrumb.Item>
                                            <Breadcrumb.Item active>{activityDetailEdit.title}</Breadcrumb.Item>
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
                            <h2>{activityDetailEdit.title}</h2>
                            <p>ID: {activityDetailEdit.id}</p>
                        </div><div className="col">
                            <p className="banner-description">Price: IDR {activityDetailEdit.price}</p>
                            <p className="banner-description">Price Discount: <span>IDR {activityDetailEdit.price_discount}</span></p>
                            <p className="banner-description"><i className="bi bi-geo-alt"></i> {activityDetailEdit.city}, {activityDetailEdit.province}</p>
                            <p className="banner-description"><i className="bi bi-star-fill" style={{color: 'yellow', fontSize: '10px'}}></i> <span> {activityDetailEdit.rating} / 5 ({activityDetailEdit.total_reviews} Reviews)</span></p>
                        </div>
                    </div>
                    <div className="tour-offer-description">
                        <h3>Description</h3>
                        <p>{activityDetailEdit.description}</p>
                        <h3>Faciilities:</h3>
                        <p>{activityDetailEdit.facilities}</p>
                        <h3>Detail</h3>
                        <p>Created: {formatDate(activityDetailEdit.createdAt)}</p>
                        <p>Updated: {formatDate(activityDetailEdit.updatedAt)}</p>
                    </div>
                    <div className="tour-location">
                    <h3>Location:</h3>
                    <p>{activityDetailEdit.address}</p>
                    <div className="location-bar">
                        <div className="location-info">
                             <p><i className="bi bi-geo-alt"></i> {activityDetailEdit.city}, {activityDetailEdit.province}</p>
                        </div>
                        <div
                            className="google-map"
                            dangerouslySetInnerHTML={{ __html: activityDetailEdit.location_maps }}
                        />
                        </div>
                </div>
                </div>
               </div>

            <FooterDashboard />
        </div>
    );
};

export default ActivityDetailEdit;